import { Component, EventEmitter, Input, Output, OnInit  } from '@angular/core';
import { BucketList } from '../bucket-list';

@Component({
  selector: 'app-bucketlist-footer',
  templateUrl: './bucketlist-footer.component.html',
  styleUrls: ['./bucketlist-footer.component.css']
})
export class BucketlistFooterComponent implements OnInit {

  @Input()
  bucketlists: BucketList[];

  constructor() { }

  ngOnInit() {
  }

}
