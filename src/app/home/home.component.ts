import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../styles.css']
})
export class HomeComponent implements OnInit {
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