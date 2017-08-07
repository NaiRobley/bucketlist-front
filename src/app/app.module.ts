import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ItemComponent } from './item/item.component';

import { AppRoutingModule, routingComponents } from './app.routes';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  exports: [
  ],
  declarations: [
    AppComponent,
    BucketlistComponent,
    HomeComponent,
    AuthComponent,
    routingComponents,
    ItemComponent,
    ProfileComponent
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
