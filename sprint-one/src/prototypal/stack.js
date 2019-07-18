var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.storage = {};
  stack.counter = 0;
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.counter] = value;
    this.counter ++;
  },
  pop: function() {
    var popped = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1];
    this.counter --;
    return popped;
  },
  size: function() {
    var length = 0;
    for (var key in this.storage) {
      length ++;
    }
    return length;
  }
};
