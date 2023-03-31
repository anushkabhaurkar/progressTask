import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './module/material/material.module';
import { AddTaskComponent } from './add-task/add-task.component';
import { AddInProgessComponent } from './add-in-progess/add-in-progess.component';
import { AddCompletedComponent } from './add-completed/add-completed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    AddInProgessComponent,
    AddCompletedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
