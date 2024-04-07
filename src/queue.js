/* eslint-disable  */
export default class Queue {
  constructor() {
    this.items = [];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) { return null; }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) { return null; }
    return this.items[0];
  }

  size() {
    return this.items.length;
  }
}
