import { TestBed, inject } from '@angular/core/testing';
import { BucketList } from "./bucket-list";
import { BucketListService } from './bucket-list.service';

describe('BucketListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BucketListService]
    });
  });

  it('should be created', inject([BucketListService], (service: BucketListService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllBucketLists()', () => {

  it('should return an empty array by default', inject([BucketListService], (service: BucketListService) => {
    expect(service.getAllBucketLists()).toEqual([]);
    }));

    it('should return all bucketlists', inject([BucketListService], (service: BucketListService) => {
      let bl1 = new BucketList({name: 'Hello 1'});
      let bl2 = new BucketList({name: 'Hello 2'});
      service.addBucketList(bl1);
      service.addBucketList(bl2);
      expect(service.getAllBucketLists()).toEqual([bl1, bl2]);
    }));

  });

  describe('#save(bucketist)', () => {

    it('should automatically assign an incrementing id', inject([BucketListService], (service: BucketListService) => {
      let bl1 = new BucketList({name: 'Hello 1'});
      let bl2 = new BucketList({name: 'Hello 2'});
      service.addBucketList(bl1);
      service.addBucketList(bl2);
      expect(service.getBucketListById(1)).toEqual(bl1);
      expect(service.getBucketListById(2)).toEqual(bl2);
    }));
  });

  describe('#deleteBucketListById(id)', () => {

    it('should remove todo with the corresponding id', inject([BucketListService], (service: BucketListService) => {
      let bl1 = new BucketList({name: 'Hello 1'});
      let bl2 = new BucketList({name: 'Hello 2'});
      service.addBucketList(bl1);
      service.addBucketList(bl2);
      expect(service.getAllBucketLists()).toEqual([bl1, bl2]);
      service.deleteBucketListById(1);
      expect(service.getAllBucketLists()).toEqual([bl2]);
      service.deleteBucketListById(2);
      expect(service.getAllBucketLists()).toEqual([]);
    }));

    it('should not removing anything if todo with corresponding id is not found', inject([BucketListService], (service: BucketListService) => {
      let bl1 = new BucketList({name: 'Hello 1'});
      let bl2 = new BucketList({name: 'Hello 2'});
      service.addBucketList(bl1);
      service.addBucketList(bl2);
      expect(service.getAllBucketLists()).toEqual([bl1, bl2]);
      service.deleteBucketListById(3);
      expect(service.getAllBucketLists()).toEqual([bl1, bl2]);
    }));

  });

  describe('#updateTodoById(id, values)', () => {

    it('should return todo with the corresponding id and updated data', inject([BucketListService], (service: BucketListService) => {
      let bucketlist = new BucketList({name: 'Hello 1'});
      service.addBucketList(bucketlist);
      let updatedBucketList = service.updateBucketListByID(1, {
        name: 'new name'
      });
      expect(updatedBucketList.name).toEqual('new name');
    }));

    it('should return null if todo is not found', inject([BucketListService], (service: BucketListService) => {
      let bucketlist = new BucketList({name: 'Hello 1'});
      service.addBucketList(bucketlist);
      let updatedBucketList = service.updateBucketListByID(2, {
        name: 'new name'
      });
      expect(updatedBucketList).toEqual(null);
    }));

  });

});
