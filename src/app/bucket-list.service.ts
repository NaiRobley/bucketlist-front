import { Injectable } from '@angular/core';
import { BucketList } from './bucket-list';

@Injectable()
export class BucketListService {

  // Placeholder for last ID so we can simulate automatically incrementing
  // id numbers
  lastId = 0;

  // Placeholder for bucket lists
  bucketlists: BucketList[] = [];

  constructor() { }

  // Simulate POST /bucketlists
  addBucketList(bucketlist: BucketList): BucketListService{

    // Increment ID number by one
    if(!bucketlist.id){
      bucketlist.id = ++this.lastId;
    }

    // Add to List
    this.bucketlists.push(bucketlist);
    return this;
  }

  // Simulate DELETE /bucketlists/:id
  deleteBucketListById(id: number): BucketListService {
    this.bucketlists = this.bucketlists.filter(bucketlist => bucketlist.id !== id);
    return this;
  }

  // Simulate PUT /bucketlists/:id
  updateBucketListByID(id: number, values: Object = {}): BucketList {
    let bucketlist = this.getBucketListById(id);
    if (!bucketlist) {
      return null;
    }
    Object.assign(bucketlist, values);
    return bucketlist;
  }

  // Simulate GET /bucketlists/
  getAllBucketLists(): BucketList[] {
    return this.bucketlists;
  }

  // Simulate GET /bucketlists/:id
  getBucketListById(id: number): BucketList {
    return this.bucketlists.filter(bucketlist => bucketlist.id === id).pop();
  }
}
