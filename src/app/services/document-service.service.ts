import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Document } from '../shared/models/documents';
import { throwError, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json", "Authorization": "c31z" })
};

@Injectable({
  providedIn: 'root'
})
export class DocumentServiceService {

  private _postsURL = "http://www.mocky.io/v2/5cbe2efe2f0000c70e16d07a";
  private product : Observable<Document[]>;
  constructor(private httpClient: HttpClient) { }
  /**
   * Function to GET what you want
   *
   * @param url
   */
  public getDocuments() {

    // Call the http GET

    return this.httpClient.get<Document[]>(this._postsURL);
    // console.log(this.product);
  }

}
