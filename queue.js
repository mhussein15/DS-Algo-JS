class Group {
  constructor(number) {
    this.number = number;
  }
}

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Queue {
  constructor(limit = 5) {
    this.front = null;
    this.back = null;
    this.length = 0;
    this.limit = limit;
    this.numberOfPeople = 0;
  }

  isFull() {
    return this.length === this.limit;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this.isEmpty() ? `Queue Underflow` : this.front.data;
  }

  enqueue(data) {
    if (this.isFull()) {
      console.log("Queue Overflow");
    } else {
      if (data > 12) {
        let numberOfPeople = data;
        while (numberOfPeople > 12) {
          if (!this.isFull()) {
            const newNode = new Node(new Group(12));
            if (this.isEmpty()) {
              this._enqueueIfEmpty(newNode);
            } else {
              this._enqueueIfNotEmpty(newNode);
            }
            numberOfPeople -= 12;
            this.length++;
          }
        }
        if (!this.isFull()) {
          const newNode = new Node(new Group(numberOfPeople));
          this._enqueueIfNotEmpty(newNode);
          this.length++;
        }
      } else {
        const newNode = new Node(new Group(data));
        if (this.isEmpty()) {
          this._enqueueIfEmpty(newNode);
        } else {
          this._enqueueIfNotEmpty(newNode);
        }
        this.length++;
      }
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue Underflow");
    } else {
      const removed = this.front;
      if (this.length === 1) {
        this.front = null;
        this.back = null;
        this.numberOfPeople -= removed.data.number;
      } else {
        this.front = removed.next;
        this.numberOfPeople -= removed.data.number;
      }
      this.length--;
      return removed.data;
    }
  }

  getTimeForQueue() {
    return this.numberOfPeople / 2;
  }

  _enqueueIfEmpty(newNode) {
    this.front = newNode;
    this.back = newNode;
    this.numberOfPeople += newNode.data.number;
  }

  _enqueueIfNotEmpty(newNode) {
    this.back.next = newNode;
    this.back = newNode;
    this.numberOfPeople += newNode.data.number;
  }
}

const RollCoaster = new Queue();

RollCoaster.enqueue(6);
RollCoaster.enqueue(7);
RollCoaster.enqueue(25);
RollCoaster.enqueue(2);

// while (!RollCoaster.isEmpty()) {
//   console.log(RollCoaster.peek());
//   RollCoaster.dequeue();
// }

console.log(RollCoaster.getTimeForQueue());
