var Node2 = function(value) {
  var node = {};
  node.value = value;
  node.next = null;
  console.log(value);
  return node;
};

var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.addToTail = function(value) {
    if (this.head === null) { // if there is no head then we assume list{} is empty
      this.head = Node2(value);//create new node, and set it equal to this.head
      this.tail = this.head;//since the list is empty, this.head will also equal this.tail
    } else {
      var prevTail = this.tail;//we get ready to change over the current tail
      this.tail = Node2(value);//this.tail is reassigned to a new obj
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
    for (var currentNode2 = this.head; currentNode2 !== this.tail; currentNode2 = currentNode2.next) {
      if (currentNode2.value === target) {
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
