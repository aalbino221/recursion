function fibIterative(n) {
  let array = [0,1];
  for (let i = 2; i < n; i++) {
    array[i] = array[i-2] + array[i-1];
  }
  return array;
}

function fibRecursive(n) {
  let array;
  if (n == 2) {return [0,1]}
  array = fibRecursive(n-1)
  array = array.concat( array[n-2] + array[n-3])
  return array
}

console.log(fibRecursive(8))