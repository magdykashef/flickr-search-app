import { Component, OnInit, OnDestroy } from '@angular/core';
import { FlickrPhoto, FlickrResponse } from './shared/models/flickr';
import { Subscription } from 'rxjs';
import { FlickrService } from './shared/services/flickr.service';
import { LoaderService } from './shared/services/loader.service';
import { trigger, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('show', [
      transition('void => visible', [
        style({ transform: 'scale(0.5)' }),
        animate('150ms')
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'flickr search app';
  keyword = '';
  prevKeyword = '';
  photos: FlickrPhoto[] = [];
  currentPhoto!: FlickrPhoto;
  currentIndex = 0;
  openPreview = false;
  currentPage = 1;
  perPage = 15;
  infiniteScrollDistance = 2;
  infiniteScrollThrottle = 1000;
  isLoading = false;
  errorMessage = '';
  subscriptions: Subscription[] = [];


  constructor(
    private flickrService: FlickrService,
    private loaderService: LoaderService,
  ) { }


  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }


  ngOnInit(): void {
    this.subscriptions.push(
      this.loaderService.isLoading().subscribe((isLoading) => this.isLoading = isLoading));
  }



  search() {
    if (this.prevKeyword === this.keyword) return;
    this.prevKeyword = this.keyword;
    this.subscriptions.push(
      this.flickrService.search(this.keyword, this.currentPage, this.perPage).subscribe(
        (response: FlickrResponse) => {
          if (!response.photos) this.errorMessage = response.stat as string;
          else {
            this.photos = response.photos.photo;
            this.currentPhoto = this.photos[0];
            this.errorMessage = '';
          }
        },
        () => this.errorMessage = 'Oops, something went wrong!'
      ));
  }


  onScroll(): void {
    this.subscriptions.push(
      this.flickrService.search(this.keyword, this.currentPage++, this.perPage).subscribe(
        (response: FlickrResponse) => {
          if (!response.photos) this.errorMessage = response.stat as string;
          else {
            this.photos.push(...response.photos.photo);
            this.errorMessage = '';
          }
        },
        () => this.errorMessage = 'Oops, something went wrong!'
      ));
  }

  openLightBox(index: number): void {
    this.currentIndex = index;
    this.currentPhoto = this.photos[index];
    this.openPreview = true;
  }

  closeLightBox() {
    this.openPreview = false;
  }

}
