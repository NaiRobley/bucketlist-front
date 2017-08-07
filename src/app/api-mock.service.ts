import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';

import { BucketList } from './bucketlist/bucket-list';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiMockService {

  constructor() {}

  // API: GET /bucketlists
  public getAllBucketLists(): Observable<BucketList[]> {
    return Observable.of([
        new BucketList({id: 1, name: "Hello 1"})
      ]);
  }

  // public getAllBucketLists(): Observable<BucketList[]> {
  //   let oj = flatMap((response:Response) => {
  //     return Observable.of([
  //       new BucketList({id: 1, name: "Hello 1"})
  //     ]);
  //   });
  //   return oj;
  //
  // }

  // API: POST /bucketlists
  public createBucketList(bucketlist: BucketList): Observable<BucketList> {
    return Observable.of(
      new BucketList({id: 1, name: "Hello 1"})
    );
  }

  // API: GET /bucketlists/:id
  public getBucketListById(bId: number): Observable<BucketList> {
    return Observable.of(
      new BucketList({id: 1, name: "Hello 1"})
    );
  }

  // API: PUT /bucketlists/:id
  public updateBucketList(bucketlist: BucketList): Observable<BucketList> {
    return Observable.of(
      new BucketList({id: 1, name: "Hello 1"})
    );
  }

  // API: DELETE /bucketlists/:id
  public deleteBucketListById(bId: number): Observable<null> {
    return null;
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
