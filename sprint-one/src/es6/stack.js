class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor(storage, counter) {
    this.storage = {};
    this.counter = 0;
  }

  push(value) {
    this.storage[this.counter] = value;
    this.counter ++;
  }

  pop() {
    var popped = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter --;
    return popped;
  }

  size() {
    var length = 0;
    for (var key in this.storage) {
      length ++;
    }
    return length;
  }

}

var stack = new Stack();