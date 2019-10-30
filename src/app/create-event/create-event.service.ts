import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { EventDetails } from '../models/event-details';
import { NgForm } from '@angular/forms';


@Injectable()
export class CreateEventService {
  constructor(private http: HttpClient) { }    
  formspreeURL="https://formspree.io/xpzaodvk";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/x-www-form-urlencoded',
    })
  };
  addNewEventDetails (ngFormData: NgForm): Observable<EventDetails> {
    let formData = new FormData();
    var obj = JSON.parse(JSON.stringify(ngFormData.value));
    formData.append("managerName", obj['managerName']);
    formData.append("managerEmail", obj['managerEmail']);
    formData.append("managerPhone", obj['managerPhone']);
    formData.append("eventName", obj['eventName']);
    formData.append("eventDesc", obj['eventDesc']);
    formData.append("eventLink", obj['eventLink']);
    return this
          .http
          .post<EventDetails>(
            this.formspreeURL, 
            formData, 
            this.httpOptions)
      .pipe();
  }
}