const List = require('../lib/list');

describe('my list', () => {
  test('should return the initial length of the list', () => {
    let actual = new List;
    let expectedValue = 0;
    expect(actual.length).toBe(expectedValue);
  });

    test('should return list array with updated values', () => {
      let actual = list.push('friends', 5);
      let expectedValue = ['friends', 5];
      expect(actual).toBe(expectedValue);
    });
});