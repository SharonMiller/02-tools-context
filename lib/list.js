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
    this[this.length++] = item;
    return this.length;
  }
  //implement pop//
  pop() {
    if (!this.length) {
      return undefined;
    }
    let popped = this[this.length - 1];
    if (this.length > 0) {
      delete this[this.length - 1];
      this.length--;
    }
    return popped;
  }
  //implement slice
  slice(beg = 0, end = this.length) {
    let sliced = new List();

    if (end > this.length) {
      end = this.length;
    }
    for (let i = beg; i < end; i++) {
      sliced.push(this[i]);
    }
    sliced.length = end - beg;

    return sliced;
  }

  //implement foreach//

  forEach(cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  }

  //implement map//
  map(cb) {
    if (typeof cb !== 'function') return null;
    let newArr = new List();
    for (let i = 0; i < this.length; i++) {
      newArr.push(cb(this[i], i, this));
    }
    return newArr;
  }

  //implement reduce
  reduce(cb, value) {
    let acc = value || 0;
    for (let i = 0; i < this.length; i++) {
      acc = cb(acc, this[i], i, this);
    }
    return acc;
  }

  //implement filter
  filter(cb, arg) {
    let filtered = new List();
    this.forEach((item, i) => {
      if (cb(item, i)) {
        filtered.push(item);
      }
    });
    return filtered;
  }
}
module.exports = List;