var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = {};
  queue.storage = {};
  queue.counter = 0;

  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    this.storage[this.counter] = value;
    this.counter ++;
  },
  dequeue: function() {
    for (var key in this.storage) {
      if (key < this.counter) {
        var popped = this.storage[key];
        delete this.storage[key];
        return popped;
      }
    }
  },
  size: function() {
    var length = 0;
    for (var key in this.storage) {
      length ++;
    }
    return length;
  }
};


