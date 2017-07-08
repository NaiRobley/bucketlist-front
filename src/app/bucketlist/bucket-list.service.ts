import { Injectable } from '@angular/core';
import { BucketList } from './bucket-list';

import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BucketListService {

  // Placeholder for last ID so we can simulate automatically incrementing
  // id numbers
  lastId = 0;
  //
  // // Placeholder for bucket lists
  bucketlists: BucketList[] = [];

  constructor( private api: ApiService ) { }

  // Simulate POST /bucketlists
  addBucketList(bucketlist: BucketList): Observable<BucketList> {

    // // Increment ID number by one
    // if(!bucketlist.id){
    //   bucketlist.id = ++this.lastId;
    // }
    //
    // // Add to List
    // this.bucketlists.push(bucketlist);
    // return this;
    return this.api.createBucketList(bucketlist);
  }

  // Simulate DELETE /bucketlists/:id
  deleteBucketListById(id: number): Observable<BucketList> {
    // this.bucketlists = this.bucketlists.filter(bucketlist => bucketlist.id !== id);
    // return this;
    return this.api.deleteBucketListById(id);
  }

  // Simulate PUT /bucketlists/:id
  updateBucketList(bucketlist: BucketList): Observable<BucketList> {
    // let bucketlist = this.getBucketListById(id);
    // if (!bucketlist) {
    //   return null;
    // }
    // Object.assign(bucketlist, values);
    // return bucketlist;
    return this.api.updateBucketList(bucketlist);
  }

  // Simulate GET /bucketlists/
  getAllBucketLists(): Observable<BucketList[]> {
    return this.api.getAllBucketLists();
  }

  // Simulate GET /bucketlists/:id
  getBucketListById(id: number): Observable<BucketList> {
    return this.api.getBucketListById(id);
  }
}
