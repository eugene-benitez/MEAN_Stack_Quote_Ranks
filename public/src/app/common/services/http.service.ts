import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) {
  }

  getAuthors = () => this._http.get('/api/objects');

  getAuthor = (id: string) => this._http.get('api/' + id);

  updateAuthor = (id: string, data) => this._http.put('api/objects/' + id, data);

  deleteAuthor = (id: string) => this._http.delete('api/objects/' + id);

  addAuthor = (data) => this._http.post('api/objects/', data);

  increaseVote = (authorID: string, quoteID: string) => this._http.get('/api/increaseVotes/' + authorID + "/" + quoteID);

  decreaseVote = (authorID: string, quoteID: string) => this._http.get('/api/decreaseVotes/' + authorID + "/" + quoteID);

  removeQuote = (authorID: string, quoteID: string) => this._http.get('/api/removeQuote/' + authorID + "/" + quoteID);

  createQuote = (authorID: string, data) =>
    this._http.put('/api/createQuote/' + authorID, data);


}

