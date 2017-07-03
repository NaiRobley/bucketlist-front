import {BucketList} from './bucket-list';

describe('BucketList', () => {
  it('should create an instance', () => {
    expect(new BucketList()).toBeTruthy();
  });
  it("should acceptvalues in the constructor", () => {
    let bucketlist = new BucketList({
      name: "Hello"
    });
    expect(bucketlist.name).toEqual("Hello");
  });
});
