'use strict';

// 1. printIndices
function printIndices(items) {
  for (const i in items) {
    console.log(items[i], i);
  }
}

// printIndices(['apple', 'berry', 'cherry'])


// 2. everyOtherItem
function everyOtherItem(items) {
  const result = [];
  for (const i in items) {
    if (i % 2 === 0) {
      result.push(items[i]);
    }
  }
  console.log(result);
}

// everyOtherItem(['apple', 'berry', 'cherry'])

// 3. smallestNItems
function smallestNItems(items, n) {
  items.sort((a, b) => a - b);
  // console.log(items);
  // console.log(items);
  const newArray = items.slice(0, n);
  newArray.reverse();
  console.log(newArray)
}

// smallestNItems([1, 30, 4, 21, 10000], 2)
