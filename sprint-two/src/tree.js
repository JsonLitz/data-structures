var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods)
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var newNode = Tree(value);
  this.children.push(newNode);
};

treeMethods.contains = function(target) {
  if (this.value === target){
    return true;
  }
  if (this.value !== target && this.children.length > 0){
    for (var i = 0; i < this.children.length; i++){
      return this.children[i].contains(target);
    }
  }else{
    return false
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


 //
 //
 //
 // var Tree = function(value) {
 //   var newTree = {};
 //   newTree.value = value;
 //   newTree.childCount = 0;
 //
 //   // your code here
 //   newTree.children = [];  // fix me
 //
 //   _.extend(newTree, treeMethods);
 //
 //   return newTree;
 // };
 //
 // var treeMethods = {};
 //
 // treeMethods.addChild = function(value) {
 //   var newNode = Tree(value);
 //   this.children[this.childCount] = newNode;
 //   this.childCount++;
 // };
 //
 // treeMethods.contains = function(target) {
 //   if (this.value === target) {
 //     return true;
 //   }else {
 //     for (var i = 0; i < this.childCount; i++) {
 //       return this.children[i].contains(target);
 //     };
 //   }
 //   return false;
 // }
 //
 //
 //
 // /*
 //  * Complexity: What is the time complexity of the above functions?
 //  addChild : O(log(n))
 //  contains : O(log(n))
 //  */
