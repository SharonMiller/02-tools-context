##  Documentation
[![Build Status](https://travis-ci.com/SharonMiller/02-tools-context.svg?branch=master)](https://travis-ci.com/SharonMiller/02-tools-context)

This is Class in a module with many methods created on it - push, pop, map, filter, foreach, slice, and reduce. 

## push
adds one or more elements to the end of an array and returns the new length of the array. Param takes in the element which will be pushed into the array. Returns the length of the array after the element(s) is pushed in.
## pop
removes the last element from an array and returns that element. This method changes the length of the array. It returns the removed element. If you call pop on an empty array it returns undefined. 
## map
creates a new array with the results of calling a provided function on every element in the calling array. Takes a callback with three pramameters - current value, index, and array. Returns a new array. 
## filter
method creates a new array with all elements that pass the test implemented by the provided function. Params include Callback with three args: element, index and array.
Returns a new array with the elements that passed the test. If no elements pass the test then it will return an empty array. 
## forEach
executes a provided function once for each array element. Takes in a callback function with three arguments: Current value of the element being processed, the index of the current value, the array that the for each is being applied to. It always returns undefined. 
## slice
method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included). The original array will not be modified. Takes in beginning index and ending index. These are zero based. If beg is undefined it will begin at 0. If end is ommited it will extract through the end of the sequence. It returns a new array containing the extracted elements. 
## reduce
executes a reducer function (that you provide) on each member of the array resulting in a single output value. The reducer takes four parameters: Accumulator,Current Value, Current Index, and Source Array.  Retuns the results from the reduction. 