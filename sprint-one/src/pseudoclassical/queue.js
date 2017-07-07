var Queue = function() {
  this.storage = {};
  this.sizeOfQueue = 0;
  this.key = 0;
  this.headIndex = 0;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};

Queue.prototype.enqueue = function (str) {
  this.storage[this.key] = str;
  this.key++;
  this.sizeOfQueue++;
}

Queue.prototype.dequeue = function () {
  var firstInLine = this.storage[this.headIndex];
  delete this.storage[this.headIndex];
  this.sizeOfQueue--;
  this.headIndex++;
  return firstInLine;
}
