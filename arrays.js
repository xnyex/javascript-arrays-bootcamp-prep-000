    var chocolateBars = ["snickers", "hundred grand", "kit kat", "skittles"];
    function addElementToBeginningOfArray(array, element) {
      const one = [element, ...array]
      return one
    }
    function destructivelyAddElementToBeginningOfArray (array, element) {
      array.unshift(element)
      return array
    }