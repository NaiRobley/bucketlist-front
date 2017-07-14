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

      // showEdit : boolean = false;

      selectedId : number;

      constructor(
        private apiService: ApiService,
        private router: Router
      ) { }

      ngOnInit() {
        this.title = 'Your Bucket Lists';
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

      removeBucketList(bucketlist) {
        this.apiService
          .deleteBucketListById(bucketlist.id)
          .subscribe(
            (_) => {
              this.bucketlists = this.bucketlists.filter((t) => t.id !== bucketlist.id);
            }
          );
      }
}
