import { Component } from '@angular/core';
import { BucketList } from './bucket-list';
import { BucketListService } from './bucket-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})




export class AppComponent {
  title = 'Your Bucket Lists';

  newBucketList: BucketList = new BucketList();

  constructor(private bucketListService: BucketListService) { }

  // handle event emitted by component
  onAddBucketList(bucketlist: BucketList){
    this.bucketListService.addBucketList(bucketlist);
  }

  // Remove a bucket list
  onRemoveBucketList(bucketlist) {
    this.bucketListService.deleteBucketListById(bucketlist.id);
  }

  // Get all bucket lists
  get bucketlists(){
    return this.bucketListService.getAllBucketLists();
  }

  // Redirect to the home page of bucket lists
  bucketlistHome(){

  }

}
