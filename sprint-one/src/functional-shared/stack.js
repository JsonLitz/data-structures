var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeOfStack = 0;
  _.extend(someInstance, stackMethods);
  return someInstance;
};


var stackMethods = {};

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}

stackMethods.push = function(str){
  this.storage[this.sizeOfStack++] = str;
}
stackMethods.pop = function(){
  var length = this.size();
  var popped = this.storage[length-1];
  delete this.storage[length-1];
  this.sizeOfStack--
  return popped;
}
