const prompt = require("prompt-sync")({ sigint: true });


class Year {
  constructor(age, highlight) {
    this.age = age;
    this.highlight = highlight;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(data) {
    if (this.head === null) {
      let current = new Node(data);
      this.head = current;
      this.tail = current;
    } else {
      let current = new Node(data);
      this.tail.next = current;
      this.tail = current;
      current = null;
    }
    ++this.size;
  }

  display() {
    if (this.head === null) {
      console.log("List is Empty");
    } else {
      let current = this.head;
      while (current !== null) {
        console.log(
          `Age: ${current.data.age}, highlight: ${current.data.highlight}`
        );
        current = current.next;
      }
    }
  }

  //This function checks if the LINKEDLIST starts from age 1 and if not it adds a Year node with age:1
  //Keeps looping untill it have a LINKEDLIST from age 1 untill the given arg age
  //List given 2 -> 3 -> 7
  // arg = 9
  //returns 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9

  addYear(age) {
    let current = this.head;
    //Keeps looping over the linked list untill all ages are in ascending order starting from 1
    if(this.tail  === null || age > this.tail.data.age){ 
    while (age !== this.size) {
      //Adds Node with age 1 and sets at as the head
      if (this.head === null || this.head.data.age !== 1) {
        let highlight = prompt(`What was the highlight for age 1?`);
        let newNode = new Node(new Year(1, highlight));
        newNode.next = current;
        this.head = newNode;
        current = this.head;
        ++this.size;
      }
      //Check if next value is in ascending order and set current to current next
      //1 -> 2 true
      //1 -> 3 false
      else if (current.next && current.next.data.age === current.data.age + 1) {
        current = current.next;
      }
      //Adds a node after the current node with current age + 1
      //1 -> 3 becomes 1 -> 2 -> 3
      //AND sets the current to head so we could loop over again and check the linked list
      else {
        let highlight = prompt(
          `What was the highlight for age ${current.data.age + 1}?`
        );
        let newNode = new Node(new Year(current.data.age + 1, highlight));
        newNode.next = current.next;
        current.next = newNode;
        ++this.size;
        current = this.head;
      }
    }
  }
  }
}
const list = new LinkedList();
list.add(new Year(1, " I was two"));
list.add(new Year(4, " I started walking"));
list.add(new Year(13, " I turned seven"));
list.addYear(12);
list.display();
