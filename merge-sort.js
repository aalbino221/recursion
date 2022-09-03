const array2 = [1, 9, 5, 8, 3, 6];

function mergeSort(array) {
  if (array.length < 2) return array;

  const arrayOne = mergeSort(array.splice(0, Math.ceil(array.length / 2)));
  const arrayTwo = mergeSort(array);

  let helper = [];

  while (arrayOne.length != 0 && arrayTwo.length != 0) {
    arrayOne[0] <= arrayTwo[0] ? helper.push(arrayOne.shift()) : helper.push(arrayTwo.shift());
  }

  arrayOne.length == 0 ? helper.push(arrayTwo[0]) : helper.push(arrayOne[0]);

  return helper;
}

mergeSort(array2)