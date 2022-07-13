import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddUserComponent } from './add-user/add-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserlistComponent,
    AddUserComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  
    BrowserAnimationsModule,

    
    ButtonModule,
    TableModule,
    CalendarModule,
    SliderModule,

  
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
