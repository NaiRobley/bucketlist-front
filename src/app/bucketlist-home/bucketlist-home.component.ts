import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { BucketList } from '../bucket-list';

@Component({
  selector: 'app-bucketlist-home',
  templateUrl: './bucketlist-home.component.html',
  styleUrls: ['./bucketlist-home.component.css']
})
export class BucketlistHomeComponent implements OnInit {

  @Input()
  bucketlists: BucketList[];

  @Output()
  remove: EventEmitter<BucketList> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRemoveBucketList(bucketlist: BucketList){
    this.remove.emit(bucketlist);
  }


}
