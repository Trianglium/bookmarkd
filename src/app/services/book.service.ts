import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { BookCover } from '../models/open-library';
import { Book } from '../models/book';
import { openLibrary } from '../shared/apiBaseUrls';

@Injectable({
  providedIn: 'root'
})
//https://openlibrary.org/dev/docs/api/books
export class BookService {
  booksAPI: string = openLibrary + "api/books?bibkeys=";
  coversAPI: string = openLibrary + "b/";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService
  ) { }

  getBookData(isbn: string | any, lccn: string | any): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksAPI + `ISBN:${isbn},LCCN:${lccn}&format=json&jscmd=data`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getBookCover(key: string, value: string, size: string): Observable<BookCover> {
    return this.http.get<BookCover>(this.coversAPI + `${key}/${value}-${size}.jpg`)
    .pipe(catchError(this.processHTTPMsgService.handleError));

  }


}
