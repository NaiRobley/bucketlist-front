import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { BucketList } from '../bucket-list';

@Component({
  selector: 'app-bucketlist-list-header',
  templateUrl: './bucketlist-list-header.component.html',
  styleUrls: ['./bucketlist-list-header.component.css']
})
export class BucketlistListHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title = 'Your Bucket Lists';

  newBucketList: BucketList = new BucketList();

  @Output()
  add: EventEmitter<BucketList> = new EventEmitter();

  // Add a Bucket list
  addBucketList(){
    this.add.emit(this.newBucketList);
    this.newBucketList = new BucketList();
  }

}
