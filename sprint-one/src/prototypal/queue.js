 var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance =  Object.create(Queue.prototype);
  someInstance.storage = {};
  someInstance.sizeOfQueue = 0;
  someInstance.headIndex = 0;
  someInstance.key = 0;

  return someInstance;
};

Queue.prototype.size =function(){
  return Object.keys(this.storage).length;
}

Queue.prototype.enqueue = function(str){
  this.storage[this.key++] = str;
  this.sizeOfQueue++;
}

 Queue.prototype.dequeue = function(){
   firstInLine = this.storage[this.headIndex];
   delete this.storage[this.headIndex]
   this.sizeOfQueue--;
   this.headIndex++
   return firstInLine;
 }

 //  var Queue = function() {
 //   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
 //   // but try not not reference your old code in writing the new style.
 //   var someInstance =  Object.create(queueMethods);
 //   someInstance.storage = {};
 //   someInstance.sizeOfQueue = 0;
 //   someInstance.headIndex = 0;
 //   someInstance.key = 0;
 //
 //   return someInstance;
 // };
 //
 // var queueMethods = {};
 // ;
 // queueMethods.size = function(){
 //   return Object.keys(this.storage).length;
 // }
 //
 // queueMethods.enqueue = function(str){
 //   this.storage[this.key++] = str;
 //   this.sizeOfQueue++;
 // }
 //
 //  queueMethods.dequeue = function(){
 //    firstInLine = this.storage[this.headIndex];
 //    delete this.storage[this.headIndex]
 //    this.sizeOfQueue--;
 //    this.headIndex++
 //    return firstInLine;
 //  }
 //
