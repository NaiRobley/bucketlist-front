import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BucketList } from './bucket-list';
@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css']
})
export class BucketlistComponent implements OnInit {


  title = 'Your Bucket Lists';

    newBucketList: BucketList = new BucketList();

      @Input()
      bucketlists: BucketList[];

      @Output()
      remove: EventEmitter<BucketList> = new EventEmitter();

      @Output()
      add: EventEmitter<BucketList> = new EventEmitter();

      constructor() { }

      ngOnInit() {
      }

      // Add a Bucket list
      addBucketList(){
        this.add.emit(this.newBucketList);
        this.newBucketList = new BucketList();
      }

      onRemoveBucketList(bucketlist: BucketList){
        this.remove.emit(bucketlist);
      }

}
