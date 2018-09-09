const List = require('../lib/list');

let testCase = new List;
for (let i = 0; i < 5; i++) {
  testCase.push(i + 5);
}


///starting tests///
describe('my list', () => {
  test('should return the initial length of the list', () => {
    let actual = new List();
    let expectedValue = 0;
    expect(actual.length).toBe(expectedValue);
  });
});

describe('push tests', () => {
  test('push should return correct length and value', () => {
    let list = new List();
    list.push('friends');
    let actual = list[0];
    expect(actual).toBe('friends');
    expect(list.length).toBe(1);
  });

  test('push should return actual list', () => {
    let list = new List();
    list.push('hi');
    list.push('happy');
    let actual = list;
    let expectedValue = { 0: 'hi', 1: 'happy', length: 2 };
    expect(actual).toEqual(expectedValue);
  });
});

describe('pop tests', () => {
  test('pop should return actual current list', () => {
    let list = new List();
    list.push('hi');
    list.push('happy');
    list.pop();
    let actual = list;
    let expectedValue = { 0: 'hi', length: 1 };
    expect(actual).toEqual(expectedValue);
  });


  test('pop should return undefined when no items in array', () => {
    let list = new List();
    let actual = list.pop();
    let expectedValue = undefined;
    expect(actual).toEqual(expectedValue);
  });
});

describe('map tests', () => {
  test('map should multiply item by 2 and return a new object', () => {
    let list = new List();
    list.push(2);
    let x = 2;
    let expectedValue = { "0": 4, "length": 1 };
    let actual = list.map(x => x * 2);
    expect(actual).toEqual(expectedValue);
  });

  test('should show new array length matches original array length', () => {
    let mapTestCase = testCase.map(x => x * 2);
    let actual = mapTestCase[0];
    let expectedValue = testCase[0] * 2;
    expect(mapTestCase.length).toBe(testCase.length);
  });

  test('should throw error when no args are passed in', () => {
    let mapTestCase = testCase.map();
    let actual = mapTestCase;
    expect(actual).toThrowError;
  });
});

describe('slice tests', () => {
  test('slice method should return value of sliced index in params.', () => {
    let list = new List();
    list.push('value1');
    list.push('value2');
    list.push('value3');
    let actual = list.slice(0);
    expect(actual[0]).toBe('value1');
  });

  test('slice method should return range of values of sliced index in params.', () => {
    let list = new List();
    list.push('value1');
    list.push('value2');
    list.push('value3');
    list.push('value4');
    let actual = list.slice(0, 2);
    expect(actual).toEqual({ '0': 'value1', '1': 'value2', length: 2 });
  });
});

describe('forEach method tests', () => {
  test('for each ads two to each item in the array.', () => {
    let forEachTest = new List;
    testCase.forEach(x => forEachTest.push(x + 2));
    let actual = forEachTest[0];
    let expectedValue = testCase[0] + 2;

    expect(forEachTest.length).toBe(testCase.length);
    expect(actual).toEqual(expectedValue);
  });
});

describe('filter method tests', () => {
  test('should show filtering for numbers over 3', () => {
    let filterTestCase = testCase.filter(item => item > 3);
    let actual = filterTestCase[0];
    let expectedValue = 5;
    expect(actual).toEqual(expectedValue);
  });

});

describe('reduce method tests', () => {
  test('should show reduce method adding each value', () => {
    let testArray = [5,2,3,1];
    let actual = testArray.reduce((acc, curr) => acc + curr);
    let expectedValue = 11;
    expect(actual).toEqual(expectedValue);
  });
});