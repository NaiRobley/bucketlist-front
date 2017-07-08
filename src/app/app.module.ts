import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';

import { BucketListService } from './bucketlist/bucket-list.service';

import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { BucketlistComponent } from './bucketlist/bucketlist.component';
import { BucketComponent } from './bucket/bucket.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule ],
  declarations: [
    AppComponent,
    BucketlistComponent,
    BucketComponent,
    HomeComponent,
    AuthComponent
  ],
  providers: [BucketListService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
