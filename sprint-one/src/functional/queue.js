var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var counter = 0;
  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[counter] = value;
    counter ++;
  };

  someInstance.dequeue = function() {
    for (var key in storage) {
      if (key < counter) {
        var popped = storage[key];
        delete storage[key];
        return popped;
      }
    }
  };

  someInstance.size = function() {
    var length = 0;
    for (var key in storage) {
      length ++;
    }
    return length;
  };

  return someInstance;
};
