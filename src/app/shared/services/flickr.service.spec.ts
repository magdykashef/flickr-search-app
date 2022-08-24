import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { FlickrService } from './flickr.service';

describe('FlickrService', () => {
  let service: FlickrService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FlickrService]
    });
    service = TestBed.inject(FlickrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
