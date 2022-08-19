import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { SearchResult } from '../models/open-library';
import { openLibrary } from '../shared/apiBaseUrls';

@Injectable({
  providedIn: 'root'
})

//https://openlibrary.org/dev/docs/api/search 
export class OsSearchService {
  searchAPI: string = openLibrary + "search.json?";

  constructor(
      private http: HttpClient,
      private processHTTPMsgService: ProcessHttpmsgService
  ) { }

  getGeneralSearchResults(searchTerm: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.searchAPI + 'q=' + searchTerm)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getAuthorProfileSearchResults(author: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(openLibrary + 'search/authors.json?q=' + author)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getTitleSearchResults(title: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.searchAPI + 'title=' + title)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getAuthorSearchResults(author: string): Observable<SearchResult[]> {
    return this.http.get<SearchResult[]>(this.searchAPI + 'author=' + author)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }



}
https://openlibrary.org/search/authors.json?q=