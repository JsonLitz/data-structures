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
  var found = [];
  containsInner(this, target, found);
  if (found.length !==0){
    return true;
  }else {
    return false;
  }
};


  function containsInner(currentNode, target, array){
    for (var i = 0; i < currentNode.children.length; i++){
      if (currentNode.children[i].value === target ){
        array.push(true);
        return;
      }
    }
    for(var i =0; i < currentNode.children.length; i++){
       containsInner(currentNode.children[i], target, array)
    }
  }


/*
 * Complexity: What is the time complexity of the above functions?
 */

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
