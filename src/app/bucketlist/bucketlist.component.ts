import { Component, OnInit } from '@angular/core';
import { BucketList } from './bucket-list';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bucketlist',
  templateUrl: './bucketlist.component.html',
  styleUrls: ['./bucketlist.component.css'],
  providers: [ApiService]
})

export class BucketlistComponent implements OnInit {

      title = 'Your Bucket Lists';

      newBucketList: BucketList = new BucketList();

      bucketlists: BucketList[] = [];

      message: string = '';

      next_page: string = '';

      previous_page: string = '';

      selectedId : number;

      access_token: string = '';

      login_status: string = '';

      constructor(
        private apiService: ApiService,
        private router: Router
      ) { }

      ngOnInit() {
        this.title = 'Your Bucket Lists ¯¯\\_(ツ)_/¯¯';
        if (localStorage.getItem('login_status') == '0') {
          this.router.navigate(['/auth']);
        } else {
          this.login_status = '1';
        }
        this.apiService
          .getAllBucketLists()
          .subscribe(
            (response) => {
              this.bucketlists = response['bucketlists'].map((bucketlist) => new BucketList(bucketlist));
              this.message = response['message'];
              this.previous_page = response['previous_page'];
              this.next_page = response['next_page'];
          });
      }

      // Get the next page
      nextPage(next_page) {
        this.apiService
          .getNextPage(next_page)
          .subscribe(
            (response) => {
              this.bucketlists = response['bucketlists'].map((bucketlist) => new BucketList(bucketlist));
              this.message = response['message'];
              this.previous_page = response['previous_page'];
              this.next_page = response['next_page'];
          });
      }

      // Get the previous page
      previousPage(next_page) {
        this.apiService
          .getPreviousPage(next_page)
          .subscribe(
            (response) => {
              this.bucketlists = response['bucketlists'].map((bucketlist) => new BucketList(bucketlist));
              this.message = response['message'];
              this.previous_page = response['previous_page'];
              this.next_page = response['next_page'];
          });
      }

      // Add a Bucket list
      addBucketList(bucketlist: BucketList){
        this.apiService
          .createBucketList(this.newBucketList)
          .subscribe(
            (newBucketList) => {
              this.bucketlists = this.bucketlists.concat(newBucketList);
            }
          );
        // this.router.navigate(['/bucketlists']);
      }

      // Search for a bucket list
      searchBucketList(query, limit) {
        this.apiService
          .searchBucketList(query, limit)
          .subscribe(
            (response) => {
              this.bucketlists = response['bucketlists'].map((bucketlist) => new BucketList(bucketlist));
              this.message = response['message'];
              this.previous_page = response['previous_page'];
              this.next_page = response['next_page'];
            }
          )
      }

      // Rename a bucket list
      updateBucketList(bucketlist) {
        this.apiService
          .updateBucketList(bucketlist)
          .subscribe(
            (_) => {
              this.bucketlists = this.bucketlists;
            }
          );
        this.router.navigate(['/bucketlists']);
      }

      // Delete a bucket list
      removeBucketList(bucketlist) {
        if (confirm('Are you sure you want to delete bucket list \'' + bucketlist.name + '\'?')) {
        this.apiService
          .deleteBucketListById(bucketlist.id)
          .subscribe(
            (_) => {
              this.bucketlists = this.bucketlists.filter((t) => t.id !== bucketlist.id);
            }
          );
        }
      }
}
