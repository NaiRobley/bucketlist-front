import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { BucketListService } from './bucket-list.service';

import { AppComponent } from './app.component';
import { BucketlistListHeaderComponent } from './bucketlist-list-header/bucketlist-list-header.component';
import { BucketlistLoginComponent } from './bucketlist-login/bucketlist-login.component';
import { BucketlistRegisterComponent } from './bucketlist-register/bucketlist-register.component';
import { BucketlistHomeComponent } from './bucketlist-home/bucketlist-home.component';
import { BucketlistAccountComponent } from './bucketlist-account/bucketlist-account.component';
import { BucketlistSingleComponent } from './bucketlist-single/bucketlist-single.component';
import { BucketlistFooterComponent } from './bucketlist-footer/bucketlist-footer.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule ],
  declarations: [
    AppComponent,
    BucketlistListHeaderComponent,
    BucketlistLoginComponent,
    BucketlistRegisterComponent,
    BucketlistHomeComponent,
    BucketlistAccountComponent,
    BucketlistSingleComponent,
    BucketlistFooterComponent
  ],
  providers: [BucketListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
