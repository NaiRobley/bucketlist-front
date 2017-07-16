import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NglModule } from 'ng-lightning/ng-lightning';
import 'hammerjs';

import { BucketListService } from './bucketlist/bucket-list.service';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketComponent } from './bucket/bucket.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { ItemComponent } from './item/item.component';

import { AppRoutingModule, routingComponents } from './app.routes';


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
    BucketComponent,
    HomeComponent,
    AuthComponent,
    routingComponents,
    ItemComponent
  ],
  providers: [BucketListService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
