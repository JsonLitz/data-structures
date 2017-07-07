var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.sizeOfStack = 0;
  someInstance.headIndex = 0;
  someInstance.key = 0;

  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.size = function(){
  return Object.keys(this.storage).length;
}

queueMethods.enqueue = function(str){
  this.storage[this.key++] = str;
  this.sizeOfStack++;
}

queueMethods.dequeue = function(){
  var firstInLine = this.storage[this.headIndex];
  delete this.storage[this.headIndex];
  this.sizeOfStack--;
  this.headIndex++;
  return firstInLine;
}
