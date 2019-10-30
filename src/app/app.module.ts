import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateEventComponent } from './create-event/create-event.component'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LayoutModule } from '@angular/cdk/layout';
import { CreateEventService } from './create-event/create-event.service';



@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule,
    FontAwesomeModule, 
    LayoutModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'create-event', component: CreateEventComponent },
    ]) ],
  declarations: [ AppComponent, HeaderComponent, FooterComponent, HomeComponent, AboutComponent, CreateEventComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CreateEventService]
})
export class AppModule { }
