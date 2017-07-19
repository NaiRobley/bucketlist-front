import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { environment } from 'environments/environment';
import { BucketList } from './bucketlist/bucket-list';
import { Item } from './item/item';
import { User } from './auth/user';

const API_URL = environment.apiUrl;

declare var Materialize: any;

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
  public searchBucketList(query, limit): Observable<BucketList> {
    return this.http
      .get(API_URL + '/api/v1/bucketlists/?q=' + query + '&limit=' + limit, {'headers': this.headers})
      .map(response => {
        Materialize.toast(response.json()['bucketlists'].length + ' bucketlists found.', 4000);
        return response.json();
      })
      .catch(this.handleError);
  }

  // // API: GET /bucketllists/
  public getNextPage(next_page): Observable<BucketList> {
    return this.http
      .get(API_URL + '/api/v1/' + next_page, {'headers': this.headers})
      .map(response => {
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
        return response.json();
      })
      .catch(this.handleError);
  }

  // API: POST /bucketlists
  public createBucketList(bucketlist: BucketList): Observable<BucketList> {
    return this.http
      .post(API_URL + '/api/v1/bucketlists', JSON.stringify({'name': bucketlist.name}), {'headers': this.headers})
      .map(response => {
        Materialize.toast('Bucketlist \'' + response.json()['name'] + '\' has been created successfully!', 4000);
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
          Materialize.toast('Bucketlist renamed to \'' + response.json()['name'] + '\'', 4000);
          return new BucketList(response.json());
        } else {
          Materialize.toast(response.json()['message']);
          window.location.reload();
          return response.json();
        }
      })
      .catch(this.handleError);
  }

  // API: DELETE /bucketlists/:id
  public deleteBucketListById(bId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/api/v1/bucketlists/' + bId, {'headers': this.headers})
      .map(response => {
        Materialize.toast("Bucketlist Successfully Deleted!", 4000);
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
        if (response.json()['name']) {
          Materialize.toast(('Item \'' + response.json()['name'] + '\' has been added'), 4000);
        }
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
          Materialize.toast(('Item \'' + name + '\' has been renamed'), 4000);
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
          Materialize.toast(('Item \'' + response.json()['name'] + '\' has been marked as done'), 4000);
        } else {
          Materialize.toast(('Item \'' + response.json()['name'] + '\' has been marked as undone'), 4000);
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
          Materialize.toast("Item Successfully Deleted!", 4000);
      })
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    console.error('ApiService::handleError', error);
    Materialize.toast(error.json()["message"], 4000);
    return Observable.throw(error);
  }

}
