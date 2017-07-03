import { Component, EventEmitter, Input, Output, OnInit  } from '@angular/core';
import { BucketList } from '../bucket-list';

@Component({
  selector: 'app-bucketlist-single',
  templateUrl: './bucketlist-single.component.html',
  styleUrls: ['./bucketlist-single.component.css']
})
export class BucketlistSingleComponent implements OnInit {

  @Input()
  bucketlist: BucketList;

  @Output()
  remove: EventEmitter<BucketList> = new EventEmitter();

  constructor() {
  }

  removeTodo(bucketlist: BucketList) {
    //this.bucketListService.deleteBucketListById(bucketlist.id);
    this.remove.emit(bucketlist);
  }

  ngOnInit() {
  }

}
