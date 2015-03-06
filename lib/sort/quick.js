module.exports = quicksort;

function quicksort (array) {
  if (array.length === 0) {
    return [];
  }
  var left = [];
  var right = [];
  var pivot = array[0];

  for (var i = 1; i < array.length; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  return quicksort(left).concat(pivot, quicksort(right));
}

// function quicksort (array) {
//   if (array.length <= 1)
//     return array;
//   var pivot = Math.floor((array.length - 1) / 2),
//     pivotValue = array[pivot],
//     left = [],
//     right = [];
//   array = array.slice(0, pivot).concat(array.slice(pivot + 1));
//   for (var i = 0; i < array.length; i++) {
//     if(array[i] < pivotValue) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return [].concat(quicksort(left), [pivotValue], quicksort(right));
// }

