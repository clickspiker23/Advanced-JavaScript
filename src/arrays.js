// Complete the following functions.
// These functions only need to work with arrays.


const each = (elements, cb) => {
  // Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // based off http://underscorejs.org/#each

  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
  }
};

const map = (elements, cb) => {
  // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array.

  // The transformedArray is going to hold the values that were transformed from cb function?
  const transformedArray = [];

  for (let i = 0; i < elements.length; i++) {
    // The ith place in the empty array is assigned the result of cb
    transformedArray[i] = cb(elements[i]);
  }
  return transformedArray;
};

const reduce = (elements, cb, memo) => {
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb`.
  // `memo` is the starting value.  If `memo` is undefined then make `elements[0]` the initial value.

  // basically sum an array
  if (memo === undefined) {
    memo = elements[0];
    for (let i = 1; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
      // cb(elements[i]);
    }
  } else {
    for (let i = 0; i < elements.length; i++) {
      memo = cb(memo, elements[i]);
    //  cb(elements[i]);
    }
  }
  return memo;
};

const find = (elements, cb) => {
  // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.

  for (let i = 0; i < elements.length; i++) {
    // passes elements to cb and at the same time checks for bool of true, ignores false
    if (cb(elements[i]) === true) {
      return elements[i];
      // linter wouldn't let me use break
    } // if no trues are found returns undefined.
    // undefined;
  }
};

const filter = (elements, cb) => {
  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth

  const truthArray = [];

  for (let i = 0; i < elements.length; i++) {
    // passes elements to cb and at the same time checks for bool of true, ignores false
    if (cb(elements[i]) === true) {
      truthArray.push(elements[i]);
    }
  }
  // want it outside the for loop so it can iterate and collect all trues
  // and if no trues a re present then it returns empty
  return truthArray;
};

const flatten = (elements) => {
  // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];

  let flattenedArray = [];
// got it working for a normal nested array so commented out
// it passed the first test
  // for (let i = 0; i < elements.length; i++) {
  //   for (let j = 0; j < elements.length; j++) {
  //     flattenedArray.push(elements[i][j]);
  //   }
  // }
  // return flattenedArray;

  for (let i = 0; i < elements.length; i++) {
    // Need to check if the content (elements inside the current array)
    // is another array. to do that use Array.isArray
    // Array.isArray checks truth value to see if its an array
    if (Array.isArray(elements[i])) {
      // if an element in elements is an array keep going deeper until false
      // This if calls the flatten(itself/recursion) function and check for true/false if element is an array
      // if it is an array it concatinates it to flattenedArray, which makes a level of arrayness
      // disappear and keeps getting called until it is false which means no array detected
      flattenedArray = flattenedArray.concat(flatten(elements[i]));
    } else {
      flattenedArray.push(elements[i]);
    }
  }
  return flattenedArray;
};


/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten
};
