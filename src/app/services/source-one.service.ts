import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SourceOneService {

  constructor(private httpClient: HttpClient) { }

  sourceBaseUrl = 'https://fakenews.squirro.com/';

  //To get the data from the 1st news source.
  getDataFromSourceOne(key: string) {
    console.log(key);
    return this.httpClient.get(`${this.sourceBaseUrl}news/${key}`);
  }
}
