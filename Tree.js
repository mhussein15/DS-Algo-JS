const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(name, left = null, right = null) {
    this.name = name;
    this.left = left;
    this.right = right;
  }
}

class TreeNode {
  constructor(data) {
    this.root = new Node(data);
  }

  addChild(temp, name) {
    if (!temp.left) {
      temp.left = new Node(name);
    } else if (!temp.right) {
      temp.right = new Node(name);
    }
  }

  search(temp, val) {
    if(temp === null){
        return;
    }
    if( temp.name !== val){
        return;
    }
    if (temp.name === val) {
      return temp;
    } else if (!temp.left) {
      this.search(temp.left);
    } else {
      this.search(temp.right);
    }
    
  }
}
const BT = new TreeNode("family");
BT.addChild(BT.search(BT.root,"family"),"jack");
BT.addChild(BT.search(BT.root,"family"),"jack");

BT.addChild(BT.root.left,"Moh");
console.log(BT);

// while (true) {
//   let string = prompt(`enter child full name (done if finished)`);
//   if (string.toLowerCase() === "done") {
//     break;
//   }
//   let stringArray = string.split(" ");
//   let leaf = root.data;
// }

// const root = new TreeNode("family");
// const child1 = new TreeNode("jack family");
// const child2 = new TreeNode("jill family");
// const child3 = new TreeNode("lemon jack family");

// // root.addChild(child1);
// // root.addChild(child2);
// // child1.addChild(child3);
// // console.log(root.children);
// // `// root.traverse();
// // `
str = "jack family";

var stringArray = str.split(" ");
stringArray.pop(0);
// let stringArray = string.split(" ");
// if (stringArray.length === 2) {
//   root.addChild(new TreeNode(stringArray[0]));
// }
// const tree = new TreeNode(answer);

// while (true) {
//   if (stringArray[1].toLowerCase() === leaf.toLowerCase()) {
//     leaf.addChild(new TreeNode(stringArray[0]));
//     break;
//   } else {
//   }
// }
