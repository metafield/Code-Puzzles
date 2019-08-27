/* 
  I will not need this class for a Number implementation
  of a linked list but it's nice ot have it written.
*/

export class NodeAttributes<T> {
  constructor(private data: T) {}
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };
  set = (update: T): void => {
    Object.assign(this.data, update);
  };
  getAll = (): T => {
    return this.data;
  };
}
