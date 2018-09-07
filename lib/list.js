// implement a List constructor using a constructor, factory, or class
// implement the length property
// implement the push() and pop(), slice() methods on the List prototype
// implement forEach(), map(), filter(), and reduce() as pure methods on the List prototype
// Do not use any built-in array methods to do this

'use strict'

class List {
  constructor() {
    this.length = 0;
  }
  //implement push//
  push(item) {
    this[this.length] = item;
    this.length++;
    return this.length;
  }
  //implement pop//
  pop() {
    let popped = this[this.length - 1];
    if (this.length === 0) {
      return undefined;
    }
    delete this[this.length - 1];
    this.length--;
    return popped;
  }

  //implement map//
  map(fn) {
    let newArr = new List;
    console.log(newArr);
    for (let i = 0; i < this.length; i++) {
      newArr.push(fn(this[i], i, this));
    }
    console.log(newArr);
    return newArr;
  }



}
module.exports = List;