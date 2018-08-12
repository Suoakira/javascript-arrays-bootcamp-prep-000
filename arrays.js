var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningofArray(array, element) {
  return [element, ...array]
}

function destructivelyAddElementToBeginningofArray(array, element) {
  array.unshift(element);
  return array;
}

function addElementToEndOfArray(array, element) {
  return [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1);
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop()
  return array;
}

function removeElementFromEndOfArray(array) {
  array.slice(0, array.length-1);
  return;
}

