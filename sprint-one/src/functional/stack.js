var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // Define global variable to hold count of keuys
  var counter = 0;
  // Implement the methods below
  someInstance.push = function(value) {
    storage[counter] = value;
    counter ++;
  };

  someInstance.pop = function() {
    var popped = storage[counter-1];
    delete storage[counter-1];
    counter --;
    return popped;
  };

  someInstance.size = function() {
    var length = 0;
    for (var key in storage) {
      length++;
    }
    return length;
  };

  return someInstance;
};


