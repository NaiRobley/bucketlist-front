import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { BucketList } from './bucketlist/bucket-list';
import { Item } from './item/item';
import { User } from './auth/user';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {

  headers: any;

  message: string = '';

  next_page: string = '';

  previous_page: string = '';

  constructor( private http: Http ) {
    this.headers = new Headers();
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Content-Type', 'application/json');
  }

  // API: POST /auth/register
  public register(username, email, password) {
    return this.http
      .post(API_URL + '/auth/register',
            JSON.stringify({'email': email, 'username': username, 'password': password}),
            {'headers': this.headers})
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  // API: POST /auth/login
  public login(username, password) {
    return this.http
      .post(API_URL + '/auth/login',
        JSON.stringify({'username': username, 'password': password}),
        {'headers': this.headers})
      .map(response => {
        return response;
      })
      .catch(this.handleError);
  }

  public getToken() {
    let token = localStorage.getItem('access_token');
    this.headers.append('Authorization', 'Bearer ' + token);
    console.log(token);
  }

  // API: GET /bucketlists
  public getAllBucketLists(): Observable<BucketList[]> {
    this.getToken();
    return this.http
      .get(API_URL + '/api/v1/bucketlists', {'headers': this.headers})
      .map(response => {
        return response.json();
      })
      .catch(this.handleError);

  }

  // API: POST /bucketlists/
  public searchBucketList(query): Observable<BucketList> {
    return this.http
      .post(API_URL + '/api/v1/bucketlists/?q=' + query, {'headers': this.headers})
      .map(response => {
        this.message =  response.json()['message'];
        console.log(response.json());
        const bucketlists = response.json()['bucketlists'];
        return bucketlists.map((bucketlist) => new BucketList(bucketlist));
      })
      .catch(this.handleError);
  }

  // // API: GET /bucketllists/
  public getNextPage(next_page): Observable<BucketList> {
    return this.http
      .get(API_URL + '/api/v1/' + next_page, {'headers': this.headers})
      .map(response => {
        console.log(response.json());
        return response.json();
      })
      .catch(this.handleError);
  }
  //
  // API: GET /bucketlists/
  public getPreviousPage(next_page): Observable<BucketList> {
    return this.http
      .get(API_URL + '/api/v1/' + next_page, {'headers': this.headers})
      .map(response => {
        console.log(response.json());
        return response.json();
      })
      .catch(this.handleError);
  }

  // API: POST /bucketlists
  public createBucketList(bucketlist: BucketList): Observable<BucketList> {
    return this.http
      .post(API_URL + '/api/v1/bucketlists', JSON.stringify({'name': bucketlist.name}), {'headers': this.headers})
      .map(response => {
        // console.log(response.json()['name']);
        return new BucketList(response.json());
      })
      .catch(this.handleError);
  }

  // API: GET /bucketlists/:id
  public getBucketListById(bId: number): Observable<BucketList> {
    return this.http
      .get(API_URL + 'api/v1//bucketlists/' + bId, {'headers': this.headers})
      .map(response => {
        return new BucketList(response.json());
      })
      .catch(this.handleError);

  }

  // API: PUT /bucketlists/:id
  public updateBucketList(bucketlist: BucketList): Observable<BucketList> {
    return this.http
      .put(API_URL + '/api/v1/bucketlists/' + bucketlist.id, bucketlist, {'headers': this.headers})
      .map(response => {
        if (response.json()['name']) {
          alert("The new name is " + response.json()['name']);
        }
        return new BucketList(response.json());
      })
      .catch(this.handleError);
  }

  // API: DELETE /bucketlists/:id
  public deleteBucketListById(bId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/api/v1/bucketlists/' + bId, {'headers': this.headers})
      .map(response => {
        alert("deleted");
      })
      .catch(this.handleError);
  }

  // ITEMS
  // API: POST /bucketlists/:id/items
  public addItemToBucketList(name, bucketlist_id): Observable<Item> {
    // this.getToken();
    return this.http
      .post(API_URL + '/api/v1/bucketlists/' + bucketlist_id + '/items', JSON.stringify({'name': name}), {'headers': this.headers})
      .map(response => {
        // if (response.json()['name']) {
        //   alert('Item ' + response.json()['name'] + ' has been created');
        // }
        return new Item(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /bucketlists/:id/items/:id
  public editItemName(name, item_id, bucketlist_id): Observable<Item> {
    // this.getToken();
    return this.http
      .put(API_URL + '/api/v1/bucketlists/' + bucketlist_id + '/items/' + item_id, JSON.stringify({'name': name}), {'headers': this.headers})
      .map(response => {
        if (response.json()['name']) {
          alert('Item ' + response.json()['name'] + ' has been renamed');
        }
        return new Item(response.json());
      })
      .catch(this.handleError);
  }

  // API: PUT /bucketlists/:id/items/:id
  public markItemDone(item_id, bucketlist_id, done): Observable<Item> {
    // this.getToken();
    return this.http
      .put(API_URL + '/api/v1/bucketlists/' + bucketlist_id + '/items/' + item_id, JSON.stringify({'done': done}), {'headers': this.headers})
      .map(response => {
        if (response.json()['done'] == true ) {
          alert('Item ' + response.json()['name'] + ' has been marked as done');
        } else {
          alert('Item ' + response.json()['name'] + ' has been marked as undone');
        }
        return new Item(response.json());
      })
      .catch(this.handleError);

  }

  // API: DELETE /bucketlists/:id/items/:id
  public removeItem(item_id, bucketlist_id): Observable<null> {
    return this.http
      .delete(API_URL + '/api/v1/bucketlists/' + bucketlist_id + '/items/' + item_id, {'headers': this.headers})
      .map(response => {
          alert("deleted");
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    // console.log(error.json()['message']);
    alert(error.json()["message"]);
    return Observable.throw(error);
  }

}
