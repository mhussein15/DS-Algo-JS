//Node Class

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

  addEnd(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
      ++this.size;
    } else {
      let newNode = new Node(data);
      this.tail.next = newNode;
      this.tail = newNode;
      ++this.size;
    }
  }

  addBegin(data) {
    if (this.head === null) {
      this.head = new Node(data);
      this.tail = this.head;
      ++this.size;
    } else {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      ++this.size;
    }
  }

  delete(data) {
    if (this.head === null) {
      console.log("List is empty");
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      --this.size;
    } else {
      let temp = this.head;

      while (temp.next.data !== data) {
        temp = temp.next;
      }

      if (temp.next.next !== null) {
        temp.next = temp.next.next;
        temp = null;
        --this.size;
      } else {
        temp.next = null;
        temp = null;
        --this.size;
      }
    }
  }

  display() {
    if (this.head === null) {
      console.log("List is empty");
    }
    let temp = this.head;
    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  find(data) {
    let temp = this.head;
    for (let index = 0; index < this.getSize(); ++index) {
      if (temp.data === data) {
        return true;
      } else {
        temp = temp.next;
      }
      return false;
    }
  }

  getSize() {
    return this.size;
  }
}

class Year {
  constructor(year, highlight) {
    this.year = year;
    this.headlight = highlight;
  }
}

const missingYears = (yearsList, year,highlight) => {
    if(yearsList.find(year,highlight) === undefined){
        yearsList.addEnd(new Year(year,highlight))
    }
};

list = new LinkedList();

list.addEnd(new Year(1, "I was born"));
list.addEnd(new Year(3, "I started walking"));
list.addEnd(new Year(7, "I turned seven"));
missingYears(list,1,"I was born")


list.display();