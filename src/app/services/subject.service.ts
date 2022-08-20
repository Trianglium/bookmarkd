import { Injectable } from '@angular/core';
import { openLibrary } from '../shared/apiBaseUrls';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { delay, map, catchError } from 'rxjs/operators';

import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Subject, WorksOfSubject } from '../models/subject';
import { SUBJECTS, SUBJECTWORKS } from '../models/subjects';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjectsAPI: string = openLibrary + 'subjects/';

  //https://openlibrary.org/dev/docs/api/subjects
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHttpmsgService
) { }

  getSubjectWorks(subject_name: string): Observable<WorksOfSubject[]> {
    return this.http.get<WorksOfSubject[]>(this.subjectsAPI + `${subject_name}.json`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getSubjectDetails(subject_name: string): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.subjectsAPI + `${subject_name}.json?details=true`)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
