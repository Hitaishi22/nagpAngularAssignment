import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Document } from '../shared/models/documents';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private _postsURL = "http://www.mocky.io/v2/5cbe2efe2f0000c70e16d07a";
  constructor(private httpClient: HttpClient) { }

  public getDocuments() {
    return this.httpClient.get<Document[]>(this._postsURL);
  }
}
