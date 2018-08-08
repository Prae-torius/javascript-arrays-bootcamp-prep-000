var chocolateBars = ["snikers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
 [...array,'foo']
 console.log(array)
   }

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift('foo');
  }