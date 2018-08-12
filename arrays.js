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

