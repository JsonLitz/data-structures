

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [];
  var bucket = this._storage.get(index)
  tuple.push(k,v)

  if (bucket === undefined){
    bucket = [];
    bucket.push(tuple)
  }else {
    for(var i = 0; i<bucket.length; i++){
      if (bucket[i][0] === k){
        bucket[i][1] = v;
      }
    }
    bucket.push(tuple);

  }

  // if(this._storage.get(index).length === 0){
  //   var bucket = [];
  // }
  // bucket.push(tuple);


  this._storage.set(index, bucket);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  for (var i = 0; i < this._storage.get(index).length; i++){
    if (this._storage.get(index)[i][0] === k){
      return this._storage.get(index)[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index)
  for (var i = 0; i < this._storage.get(index).length; i++){
    if (this._storage.get(index)[i][0] === k){
       bucket.splice(i, 1);
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
