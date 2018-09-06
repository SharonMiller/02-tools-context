const List = require('../lib/list');

describe('my list', () => {
  test('should return the initial length of the list', () => {
    let actual = new List;
    let expectedValue = 0;
    expect(actual.length).toBe(expectedValue);
  });
});