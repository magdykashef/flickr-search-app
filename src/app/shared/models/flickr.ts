export interface FlickrPhoto {
  id: string;
  title: string;
  ownername: string;
  secret: string;
  server: string;
  url: string;
  dateupload: string;
  datetaken: string;
}

export interface FlickrResponse {
  code?: number;
  message?: string;
  stat?: string;
  photos?: {
    photo: FlickrPhoto[];
  };
}