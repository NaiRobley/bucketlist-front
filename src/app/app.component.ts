import { Component, OnInit } from '@angular/core';
import { BucketList } from './bucketlist/bucket-list';
import { BucketListService } from './bucketlist/bucket-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BucketListService]
})




export class AppComponent implements OnInit {
  title = 'Your Bucket Lists';

  newBucketList: BucketList = new BucketList();

  bucketlists: BucketList[] = [];

  constructor(private bucketListService: BucketListService) { }

  public ngOnInit() {
    this.title = 'Your Bucket Lists';
    this.bucketListService
      .getAllBucketLists()
      .subscribe(
        (bucketlists) => {
          this.bucketlists = bucketlists;
        }
      );
  }

  // handle event emitted by component
  onAddBucketList(bucketlist: BucketList){
    this.bucketListService
    .addBucketList(bucketlist)
    .subscribe(
      (newBucketList) => {
        this.bucketlists = this.bucketlists.concat(newBucketList);
      }
    );
  }

  // Remove a bucket list
  onRemoveBucketList(bucketlist) {
    this.bucketListService
    .deleteBucketListById(bucketlist.id)
    .subscribe(
      (_) => {
        this.bucketlists = this.bucketlists.filter((t) => t.id !== bucketlist.id);
      }
    );
  }
  //
  // // Update a bucket list
  // onUpdateBucketList(bucketlist) {
  //   this.bucketListService
  //   .updateBucketList(bucketlist.id)
  //   .subscribe(
  //     (bucketlist) => {
  //       this.bucketlists = this.bucketlists.filter((t) => t.id === bucketlist.id);
  //     }
  //   );
  // }

  // Get all bucket lists
  // get bucketlists(){
  //   return this.bucketListService.getAllBucketLists();
  // }

  // Redirect to the home page of bucket lists
  // bucketlistHome(){
  //
  // }

}
