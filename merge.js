let firstArr = [3, 2, 1, 13, 8, 5, 0, 1];
let secondArr = [105, 79, 100, 110];

function qs(arr, lo, hi) {
  if (lo >= hi) {
    return arr;
  }

  const pivotIdx = partition(arr, lo, hi);

  qs(arr, lo, pivotIdx - 1);
  qs(arr, pivotIdx + 1, hi);
}

function partition(arr, lo, hi) {
  let idx = lo - 1;
  let pivot = arr[hi];

  for (let i = lo; i < hi; i++) {
    if (arr[i] <= pivot) {
      idx++;
      const tmp = arr[i];
      arr[i] = arr[idx];
      arr[idx] = tmp;
    }
  }
  idx++;
  arr[hi] = arr[idx];
  arr[idx] = pivot;
  return idx;
}

function quickSort(arr) {
  let result = qs(arr, 0, arr.length - 1);
  return result;
}
console.log(quickSort(firstArr));
console.log(quickSort(secondArr));
