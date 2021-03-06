import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Item } from './item';
import { BucketList } from '../bucketlist/bucket-list';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ApiService]
})

export class ItemComponent implements OnInit {

        newItem: Item = new Item();

        name: string = '';

        bucketlist_id: number;

        items: Item[] = [];

        showEdit : boolean = false;

        selectedId : number;

        @Input()
        item: Item;

        @Input()
        bucketlist: BucketList;

        @Output()
        update: EventEmitter<Item> = new EventEmitter();

        @Output()
        remove: EventEmitter<Item> = new EventEmitter();

        constructor(
          private apiService: ApiService,
          private router: Router
        ) {}


        ngOnInit() {
          this.apiService.getToken();
          this.router.navigate(['/bucketlists']);
        }

        addItem(name, bucketlist_id) {
          this.apiService
            .addItemToBucketList(name, bucketlist_id)
            .subscribe(
              (newItem) => {
                this.bucketlist.items = this.bucketlist.items.concat(newItem);
              }
            )
        }

        editItemName(name, item_id, bucketlist_id) {
          this.apiService
            .editItemName(name, item_id, bucketlist_id)
            .subscribe(
              (item) => {
                this.bucketlist.items = this.bucketlist.items;
              }
            )
        }

        markItemDone(item_id, bucketlist_id, done) {
          this.apiService
            .markItemDone(item_id, bucketlist_id, done)
            .subscribe(
              (item) => {
                this.bucketlist.items = this.bucketlist.items;
              }
            )
        }

        removeItem(item, bucketlist_id) {
          if (confirm('Are you sure you want to delete item \'' + item.name + '\'?')) {
          this.apiService
            .removeItem(item.id, bucketlist_id)
            .subscribe(
              (_) => {
                this.items = this.items.filter((t) => t.id !== item.id);
                window.location.reload();
              }
            )
          }
        }

}
