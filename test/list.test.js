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
      console.log(list);
      console.log(actual);
      expect(actual).toEqual(expectedValue);
    });
    
    test('push should return actual list', () => {
      let list = new List;
      list.push('hi');
      list.push('happy');
      let actual = list;
      let expectedValue = { 0: 'hi', 1: 'happy', length: 2 };
      console.log(list);
      console.log(actual);
      expect(actual).toEqual(expectedValue);
    });

    test('pop should return actual current list', () => {
      let list = new List;
      list.push('hi');
      list.push('happy');
      list.pop();
      let actual = list;
      let expectedValue = { 0: 'hi', length: 1 };
      console.log(list);
      console.log(actual);
      expect(actual).toEqual(expectedValue);
    });


});