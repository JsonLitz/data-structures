var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    //  if () {

    // TODO: check lastNode later

      // var lastNode = Node(value);
      // list.tail = lastNode;
    //  }

    if (this.head === null) { // if there is no head then we assume list{} is empty
      this.head = Node(value);//create new node, and set it equal to this.head
      this.tail = this.head;//since the list is empty, this.head will also equal this.tail
    } else {
      var prevTail = this.tail//we get ready to change over the current tail
      this.tail = Node(value);//this.tail is reassigned to a new obj
      prevTail.next = this.tail;//we change the next property on the previous tail to point it at the new tail
    }

  };

  list.removeHead = function() {
    // list.head = list[Object.keys(list)[1]];
    // delete

    if (this.head) {
      var currentHead = this.head;//store current head
      this.head = currentHead.next;//assign head property of list{} to the node that currethead is pointing at
      return currentHead.value;//return the removed head
    }

  };

  list.contains = function(target) {
    for (var currentNode = this.head; currentNode !== this.tail; currentNode = currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
    }
    if (this.tail.value === target) {
      return true;
    } else {
      return false;
    }

  };

  return list;
};


/*
 * Complexity: What is the time complexity of the above functions?

 addToTail : O(1)
 removeHead : O(1)
 contains : O(n)
 */
