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


}
module.exports = List;