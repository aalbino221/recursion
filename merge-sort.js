const array2 = [1, 9, 5, 8, 3, 6];

function mergeSort(array) {
  if (array.length < 2) return array;

  const arrayOne = mergeSort(array.splice(0, Math.ceil(array.length / 2)));
  const arrayTwo = mergeSort(array);

  let helper = [];
  let i = 0 ,j = 0;

  while (arrayOne.length > i && arrayTwo.length > j) {
    if (arrayOne[i] <= arrayTwo[j]) { 
      helper.push(arrayOne[i]);
      i++;
    } 
    else {
      helper.push(arrayTwo[j]);
      j++;
    }
  }

  while (arrayOne.length == i) {
    helper.push(arrayTwo[j]);
    i++;
  }

  while (arrayTwo.length == j) {
    helper.push(arrayOne[i]);
    j++;
  }

  return helper;
}

mergeSort(array2)