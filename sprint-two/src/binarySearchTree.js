var BinarySearchTree = function(value) {
  var instance = Object.create(BinarySearchTree.prototype);
    instance.value = value;
    instance.right = null;
    instance.left = null;

  return instance;
};

BinarySearchTree.prototype.insert = function (value) {
  var node = BinarySearchTree(value);
  function recursor(binarySearch) {
    if (binarySearch.value > value && binarySearch.left === null) {
      binarySearch.left = node;
    } else if (binarySearch.value > value) {
      recursor(binarySearch.left);
    } else if (binarySearch.value < value && binarySearch.right === null) {
      binarySearch.right = node;
    } else if (binarySearch.value < value) {
      recursor(binarySearch.right);
    }
  }

  recursor(this);
};

BinarySearchTree.prototype.contains = function (value) {
  var doesContain = false;
  //accepts a value and returns a boolean reflecting whether or not the value is contained in the tree.
  function recursor(binarySearch) {
    if (binarySearch.value === value) {
      doesContain = true;
    } else if (binarySearch.left !== null && value < binarySearch.value) {
      recursor(binarySearch.left);
    } else if (binarySearch.right !== null && value > binarySearch.value) {
      recursor(binarySearch.right);
    }
  }
  recursor(this);
  return doesContain;
};

BinarySearchTree.prototype.depthFirstLog = function (callback) {
  function recursor(binarySearch) {
    callback.call(binarySearch, binarySearch.value);

    if (binarySearch.left !== null) {
      recursor(binarySearch.left);
    }

    if (binarySearch.right !== null) {
      recursor(binarySearch.right);
    }
  }

  recursor(this);
};
