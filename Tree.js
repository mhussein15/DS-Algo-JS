const { add } = require("lodash");

const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(name, left = null, right = null) {
    this.name = name;
    this.left = null;
    this.right = null;
  }
}

class TreeNode {
  constructor(name) {
    this.root = new Node(name);
  }
  // Add function takes 3 args
  // current arg and the starting point will be the Tree root
  // name that would be entered the tree
  // secondName eg. Mohammad Osama Hussein secondName will be Osama,name will be Mohammad

  //This function uses Depth-first search to search for the right names and create new Node if found
  //The function will start searching from the root -> left node -> right node
  add(current, name, secondName) {
    //Check if the node thats current is pointing to has the same name of the familyName provided by the function
    if (current.name.toLowerCase() === secondName.toLowerCase()) {
      //Check if the left node of current node is null ,if yes create a new node here
      if (current.left === null) {
        current.left = new Node(name);
      }
      //Check if the right node of current node is null ,if yes create a new node here
      else if (current.right === null) {
        current.right = new Node(name);
      }
      //Both current.left and current.right are pointing to other nodes
      else {
        console.log("orphan child");
      }
    }

    //Check in the left node of current
    if (current.left) {
      this.add(current.left, name, secondName);
    }

    //Check in the right node of current
    if (current.right) {
      this.add(current.right, name, secondName);
    }
  }

  //Prints the tree using Breadth First Traversal (Level order traversal) using a queue
  printTree(current) {
    if (current === null) return;
    //Queue
    const q = [];
    //Pushes the node that current is pointing too
    q.push(current);

    //While loop that keeps looping untill queue is empty
    while (q.length !== 0) {
      //Pop the front of the queue and assign it to temp
      let current = q.shift();
      //Prints the name in the current node
      console.log(current.name.charAt(0).toUpperCase() + current.name.slice(1));
      //Checks if current have a left left
      if (current.left !== null) {
        //Push the node that current left is pionting to
        q.push(current.left);
      }
      //Checks if current have a right left
      if (current.right !== null) {
        //Push the node that current right is pionting to
        q.push(current.right);
      }
      //The while loop will continue to :-
      //Print whats in the queue
      //check if the nodes have any left/right leaf
      //untill the queue is empty which means that its visited every node in the tree
    }
  }
}

//Enter family name as a starting point
let string = prompt(`enter family name (done if finished):- `);

const BT = new TreeNode(string);

//Loop that asks users to enter children name and add them to the tree
while (true) {
  let string = prompt(`enter child full name (done if finished):- `);
  if (string.toLowerCase() === "done") {
    break;
  }
  let stringArray = string.split(" ");
  BT.add(BT.root, stringArray[0], stringArray[1]);
}

BT.printTree(BT.root);
