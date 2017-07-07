var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.sizeOfStack = 0;
  return someInstance
};

var stackMethods = {};

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}

stackMethods.push = function(str){
  this.storage[this.sizeOfStack] = str;
  this.sizeOfStack++
}

stackMethods.pop = function() {
  var length = this.size();
  var lastInLine = this.storage[length-1]
  delete this.storage[length-1];
  this.sizeOfStack--;
  return lastInLine;
}
