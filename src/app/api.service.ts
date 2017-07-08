import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BucketList } from './bucketlist/bucket-list';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  constructor( private http: Http ) {}

  // API: GET /bucketlists
  public getAllBucketLists(): Observable<BucketList[]> {
    return this.http
      .get(API_URL + '/bucketlists')
      .map(response => {
        const bucketlists = response.json();
        return bucketlists.map((bucketlist) => new BucketList(bucketlist));
      })
      .catch(this.handleError);

  }

  // API: POST /bucketlists
  public createBucketList(bucketlist: BucketList): Observable<BucketList> {
    return this.http
      .post(API_URL + '/bucketlists', bucketlist)
      .map(response => {
        return new BucketList(response.json());
      })
      .catch(this.handleError);
  }

  // API: GET /bucketlists/:id
  public getBucketListById(bId: number): Observable<BucketList> {
    return this.http
      .get(API_URL + '/bucketlists/' + bId)
      .map(response => {
        return new BucketList(response.json());
      })
      .catch(this.handleError);

  }

  // API: PUT /bucketlists/:id
  public updateBucketList(bucketlist: BucketList): Observable<BucketList> {
    return this.http
      .put(API_URL + '/bucketlists/' + bucketlist.id, bucketlist)
      .map(response => {
        return new BucketList(response.json());
      })
      .catch(this.handleError);
  }

  // API: DELETE /bucketlists/:id
  public deleteBucketListById(bId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/bucketlists/' + bId)
      .map(response => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }

}
