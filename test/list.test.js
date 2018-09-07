const List = require('../lib/list');

describe('my list', () => {
  test('should return the initial length of the list', () => {
    let actual = new List;
    let expectedValue = 0;
    expect(actual.length).toBe(expectedValue);
  });

  test('push should return correct length', () => {
    let list = new List;
    let actual = list.push('friends');
    let expectedValue = list.length;
    expect(actual).toEqual(expectedValue);
  });

  test('push should return actual list', () => {
    let list = new List;
    list.push('hi');
    list.push('happy');
    let actual = list;
    let expectedValue = { 0: 'hi', 1: 'happy', length: 2 };
    expect(actual).toEqual(expectedValue);
  });

  test('pop should return actual current list', () => {
    let list = new List;
    list.push('hi');
    list.push('happy');
    list.pop();
    let actual = list;
    let expectedValue = { 0: 'hi', length: 1 };
    expect(actual).toEqual(expectedValue);
  });

  test('pop should return undefined when no items in array', () => {
    let list = new List;
    let actual = list.pop();
    let expectedValue = undefined;
    expect(actual).toEqual(expectedValue);
  });


  test('map should multiply item by 2 and return a new object', () => {
    let list = new List;
    list.push(2);
    let x = 2;
    let expectedValue = {"0": 4, "length": 1};
    let actual = list.map(x => x * 2);
    expect(actual).toEqual(expectedValue);
  });

});