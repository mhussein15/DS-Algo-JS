const { has } = require("lodash");

class HashTable {
  // constructor(arraySize) {
  //   this.arraySize = arraySize;
  //   this.array = new Array(this.arraySize).fill(null);
  // }

  constructor(arraySize) {
    this.arraySize = arraySize;
    this.classes = { A: [], B: [], C: [], D: [], Other: [] };
    this.limit = 0;
  }

  hash(key) {
    let hashCode = "";
    if (key >= 90 && key <= 100) {
      hashCode = "A";
    } else if (key >= 80 && key < 90) {
      hashCode = "B";
    } else if (key >= 70 && key < 80) {
      hashCode = "C";
    } else if (key >= 60 && key < 70) {
      hashCode = "D";
    } else {
      hashCode = "Other";
    }
    return hashCode;
  }

  insert(value, key) {
    const hashCode = this.hash(key);
    if (this.limit <= this.arraySize) {
      switch (hashCode) {
        case "A":
          this.classes["A"].push({ value, key });
          ++this.limit;
          break;
        case "B":
          this.classes["B"].push({ value, key });
          ++this.limit;
          break;
        case "C":
          this.classes["C"].push({ value, key });
          ++this.limit;
          break;
        case "D":
          this.classes["D"].push({ value, key });
          ++this.limit;
          break;
        case "Other":
          this.classes["Other"].push({ value, key });
          ++this.limit;
          break;
        default:
          break;
      }
    } else {
      console.log("Sorry, no space for more students in this class");
    }
  }

  lookup(key) {
    let ans = "";
    const hashCode = this.hash(key);
    switch (hashCode) {
      case "A":
        this._lookUpInClass("A", key);
        break;
      case "B":
        this._lookUpInClass("B".key);
        break;

      case "C":
        this._lookUpInClass("C", key);
        break;

      case "D":
        this._lookUpInClass("D", key);
        break;

      case "Other":
        this._lookUpInClass("Other", key);
        break;

      default:
        break;
    }
    return ans;
  }

  _lookUpInClass(c, value) {
    this.classes[c].forEach((student) => {
      if (value === student.key) {
        console.log(student);
      }
    });
  }

  display(c) {
    this.classes[c].forEach((student) => {
      console.log(student.value, student.key);
    });
  }
}

const hashTable = new HashTable(20);
hashTable.insert("JMunoz", 90);

const students = [
  { name: "Jean-Luc Garza", score: 24 },
  { name: "Teddy Munoz", score: 79 },
  { name: "Georgia Ali", score: 17 },
  { name: "Vicky Calhoun", score: 8 },
  { name: "Awais Weaver", score: 65 },
  { name: "Athena Kline", score: 52 },
  { name: "Zacharia Whitaker", score: 38 },
  { name: "Clarice Davenport", score: 99 },
  { name: "Viktoria Flynn", score: 84 },
  { name: "Ianis Crossley", score: 20 },
  { name: "Johnnie Owens", score: 74 },
  { name: "Emily-Rose Erickson", score: 33 },
  { name: "Adeel Nieves", score: 100 },
  { name: "Dustin Villegas", score: 98 },
  { name: "Maxine Hughes", score: 65 },
  { name: "Bilaal Harding", score: 79 },
  { name: "Maddie Ventura", score: 71 },
  { name: "Leroy Rees", score: 44 },
  { name: "Wanda Frank", score: 73 },
  { name: "Margaux Herbert", score: 80 },
  { name: "Ali Rios", score: 70 },
  { name: "Nigel Santiago", score: 25 },
  { name: "Markus Greene", score: 78 },
  { name: "Harlan Parrish", score: 97 },
  { name: "Baran Davidson", score: 43 },
  { name: "Seth Rodriguezh", score: 67 },
  { name: "Diego Mayer", score: 100 },
];

students.forEach((student) => {
  hashTable.insert(student.name, student.score);
});
console.log("Grade ----- A");
hashTable.display("A");
console.log("Grade ----- B");
hashTable.display("B");
console.log("Grade ----- C");
hashTable.display("C");
console.log("Grade ----- D");
hashTable.display("D");
console.log("Grade ----- F");
hashTable.display("Other");
