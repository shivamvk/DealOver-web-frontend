import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgForm } from '@angular/forms';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import { EventDetails } from '../models/event-details';
import { CreateEventService } from './create-event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
  providers: [CreateEventService]
})
export class CreateEventComponent implements OnInit {
  public smallScreen:boolean;
  public largeScreen:boolean;
  constructor(
    public breakpointObserver: BreakpointObserver,
    private createEventService: CreateEventService
  ) { }
  ngOnInit() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.smallScreen = true;
        this.largeScreen = false;
      }
      if (result.breakpoints[Breakpoints.Small]) {
        this.smallScreen = true;
        this.largeScreen = false;
      }
      if (result.breakpoints[Breakpoints.Medium]) {
        this.smallScreen = false;
        this.largeScreen = true;
      }
      if (result.breakpoints[Breakpoints.Large]) {
        this.smallScreen = false;
        this.largeScreen = true;
      }
      if (result.breakpoints[Breakpoints.XLarge]) {
        this.smallScreen = false;
        this.largeScreen = true;
      }
    });
  }
  faCheckCircle = faCheckCircle;
  model = new EventDetails();
  loading = false;
  displayForm = true;
  displayThanks = false;
  onSubmit(formData : NgForm){
    this.loading = true;
    this.displayForm = false;
    console.log(formData.value);
    this
      .createEventService
      .addNewEventDetails(formData)
      .subscribe(res => {
        console.log(res);
        this.loading = false;
        this.displayThanks = true;
      });
  }
}