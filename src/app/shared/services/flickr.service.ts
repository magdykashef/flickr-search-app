import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FlickrResponse, FlickrPhoto } from '../models/flickr';

@Injectable({
  providedIn: 'root'
})
export class FlickrService {

  constructor(private http: HttpClient) { }

  search(keyword: string, currentPage: number, perPage = 10): Observable<FlickrResponse> {
    const params = `api_key=${environment.flickr.apiKey}&text=${keyword}&extras=description%2C+date_upload%2C+date_taken%2C+owner_name&per_page=${perPage}&page=${currentPage}&format=json&nojsoncallback=1`;

    return this.http.get<FlickrResponse>(environment.flickr.url + params)
      .pipe(
        map((response: FlickrResponse) => {
          if (response.photos) {
            response.photos.photo.map((flickrPhoto: FlickrPhoto) => {
              flickrPhoto.url = `https://live.staticflickr.com/${flickrPhoto.server}/${flickrPhoto.id}_${flickrPhoto.secret}.jpg`;
            });
          }
          return response;
        })
      );
  }


}
