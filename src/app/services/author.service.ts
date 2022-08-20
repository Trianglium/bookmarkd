import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Author, AuthorWorks } from '../models/author';
import { AUTHORS, AUTHORWORKS } from '../models/authors';
import { openLibrary } from '../shared/apiBaseUrls';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  //https://openlibrary.org/dev/docs/api/authors
  authorsAPI: string = openLibrary + 'authors/';

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService
  ) { }

  getAuthorPage(identifier_key: string): Observable<Author[]> {
    return this.http.get<Author[]>(this.authorsAPI + `{identifier_key}.json`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getAuthorWorks(identifier_key: string): Observable<AuthorWorks[]> {
    return this.http.get<AuthorWorks[]>(this.authorsAPI + `{identifier_key}/works.json`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}
