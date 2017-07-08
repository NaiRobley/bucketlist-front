export class BucketList {
  id: number;
  name: string = "";
  items: object[] = [];

  constructor(values: Object = {}){
    Object.assign(this, values);
  }
}


// let bucketlist = new BucketList({
//   name: "Go To Arusha"
// });
