class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor(limit = 10) {
    this.top = null;
    this.length = 0;
    this.limit = limit;
  }

  isFull() {
    this.length === this.limit;
  }

  isEmpty() {
    this.length === 0;
  }

  peek() {
    return this.isEmpty() ? "Nothing Here" : this.top.data;
  }

  push(data) {
    if (this.isFull()) {
      console.log("Stack is Full");
    } else {
      const newNode = new Node(data, this.top);
      this.top = newNode;
      this.length++;
    }
  }

  pop() {
    if (this.isEmpty()) {
      console.log("Stack is Empty");
    } else {
      const popped = this.top;
      this.top = popped.next;
      this.length--;
      return popped.data;
    }
  }
}

class Card {
  constructor(color, number) {
    this.color = color;
    this.number = number;
  }
}

const arrColor = ["Red", "Blue", "Green", "Yellow"];
const deck = new Stack(20);
const player1 = new Stack(5);
const player2 = new Stack(5);
let deckCounter = 0;

//Add Random CARDS to DECK
while (deck.length !== deck.limit) {
  deck.push(
    new Card(
      arrColor[Math.floor(Math.random() * 4)],
      Math.floor(Math.random() * 9) + 1
    )
  );
}

//Player One Cards
console.log("Player One Cards");

while (player1.length !== player1.limit) {
  player1.push(deck.peek());
  console.log(deck.peek().color, deck.peek().number);
  deck.pop();
}
console.log("----------------------------------");

//Player Two Cards
console.log("Player Two Cards");

while (player2.length !== player2.limit) {
  player2.push(deck.peek());
  console.log(deck.peek().color, deck.peek().number);
  deck.pop();
}
console.log("----------------------------------");

//Top of Deck
console.log("Top Top the Deck");

console.log(deck.peek().color, deck.peek().number);
console.log("----------------------------------");
