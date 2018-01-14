function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return[element, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array, element) {
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}

function accessElementInArray(array, index) {
  return array[index]
  // verify this
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  var arrayBackup = array
  array.shift(0)
  return array
  array = arrayBackup
}

function removeElementFromBeginningOfArray(array) {
  return array.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop(0)
  return array
}

function removeElementFromEndOfArray(array) {
  return array.slice(0, array.length - 1)
}
