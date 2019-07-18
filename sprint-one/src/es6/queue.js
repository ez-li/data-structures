class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, counter) {
    this.storage = {};
    this.counter = 0;
  }

  enqueue(value) {
    this.storage[this.counter] = value;
    this.counter ++;
  }

  dequeue() {
    for (var key in this.storage) {
      if (key < this.counter) {
        var popped = this.storage[key];
        delete this.storage[key];
        return popped;
      }
    }
  }

  size() {
    var length = 0;
    for (var key in this.storage) {
      length ++;
    }
    return length;
  }

}

var queue = new Queue();