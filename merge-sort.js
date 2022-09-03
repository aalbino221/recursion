const array2 = [1, 9, 5, 8, 3, 6];

function mergeSort(array) {
  if (array.length < 2) return array;

  const arrayOne = mergeSort(array.splice(0, Math.ceil(array.length / 2)));
  const arrayTwo = mergeSort(array.splice(-Math.ceil(array.length / 2)));

  let helper = [];

  while (arrayOne.length > 0 || arrayTwo.length > 0) {
    if (arrayTwo.length == 0) {
      helper.push(arrayOne[0]);
      break;
    } else if (arrayOne.length == 0) {
      helper.push(arrayTwo[0])
      break;
    } else if (arrayOne[0] <= arrayTwo[0]) {
      helper.push(arrayOne.shift()) 
    } else helper.push(arrayTwo.shift());
  }

  return helper;
}

mergeSort(array2)

