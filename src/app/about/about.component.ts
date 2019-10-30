import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout'
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent  {
  public smallScreen:boolean;
  public largeScreen:boolean;
  constructor(public breakpointObserver: BreakpointObserver) { }
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
        this.smallScreen = true;
        this.largeScreen = false;
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
}
