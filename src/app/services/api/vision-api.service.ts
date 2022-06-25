/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable quote-props */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class VisionApiService {
  constructor(public http: HttpClient) {}
  getFace(base64Image) {
    const body = {
      requests: [
        {
          image: {
            content: base64Image,
          },
          features: [
            {
              type: 'LABEL_DETECTION',
              maxResults: 1,
            },
          ],
        },
      ],
    };
    return this.http.post(
      'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyATnIDSpxoABIUxqqnGB16K9eKbJ8eCTYI',
      body
    );
  }
}
