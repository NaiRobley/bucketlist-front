import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BucketList } from '../bucketlist/bucket-list';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.css']
})
export class BucketComponent implements OnInit {

        @Input()
        bucketlist: BucketList;

        @Output()
        update: EventEmitter<BucketList> = new EventEmitter();

        @Output()
        remove: EventEmitter<BucketList> = new EventEmitter();

        constructor() {
        }

        updateBucketList(bucketlist: BucketList) {
          this.update.emit(bucketlist);
        }

        removeBucketList(bucketlist: BucketList) {
          this.remove.emit(bucketlist);
        }

        ngOnInit() {
        }

}
