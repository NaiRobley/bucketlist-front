export class BucketList {
  id: number;
  name: string = "";

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}


let bucketlist = new BucketList({
  name: "Go To Arusha"
});
