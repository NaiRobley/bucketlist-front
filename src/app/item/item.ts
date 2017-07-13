export class Item {
  id: number;
  name: string = '';
  bucketlist_id: number;
  created_by: number;
  done: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
