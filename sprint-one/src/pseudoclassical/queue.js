var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.counter = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.counter] = value;
  this.counter ++;
};

Queue.prototype.dequeue = function() {
  for (var key in this.storage) {
    if (key < this.counter) {
      var popped = this.storage[key];
      delete this.storage[key];
      return popped;
    }
  }
};

Queue.prototype.size = function() {
  var length = 0;
  for (var key in this.storage) {
    length ++;
  }
  return length;
};

var queue = new Queue();