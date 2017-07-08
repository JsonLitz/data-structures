var BinarySearchTree = function(value) {
  var newTree = Object.create(methods);
  newTree.value = value;
  newTree.left = null;
  newTree.right = null;
  return newTree
};
var methods = {}

methods.insert = function (num) {
  var node = BinarySearchTree(num)
  debugger;
  function reCheck(sup){
    if(this.value > sup){
      
    }
}

methods.contains = function () {

}

methods.depthFirstLog = function () {

}
/*
 * Complexity: What is the time complexity of the above functions?
 */
