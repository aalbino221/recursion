let array2 = [1,9,5,8,3,6]

function mergeSort(array) {
  if (array.length < 2) {return array}

  let arrayOne = mergeSort(array.splice(0,Math.ceil(array.length / 2)));
  let arrayTwo = mergeSort(array.splice(-Math.ceil(array.length / 2)));

  let helper = [];

  while (arrayOne.length != 0 || arrayTwo.length != 0) {
    if (arrayOne[0] <= arrayTwo[0]) {
      helper.push(arrayOne.shift());
    } else if (arrayOne[0] > arrayTwo[0]) {
      helper.push(arrayTwo.shift())
    } else {
      helper = helper.concat(arrayOne.concat(arrayTwo))
      break
    }
  }

  return helper;
}

mergeSort(array2)