var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.sizeOfStack = 0;

};

Stack.prototype.size = function(){
  return Object.keys(this.storage).length;
}

Stack.prototype.push = function(str){
  this.storage[this.sizeOfStack] = str;
  this.sizeOfStack++;
}

Stack.prototype.pop = function(){
  var length = this.size();
  var lastInLine = this.storage[length-1];
  delete this.storage[length-1];
  this.sizeOfStack--;
  return lastInLine; 
}
