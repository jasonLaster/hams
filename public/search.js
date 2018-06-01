function binarySearch(list, value) {
  let start = 0;
  let stop = list.length - 1;
  let middle = Math.floor((start + stop) / 2);

  while (list[middle] !== value && start < stop) {
    if (value < list[middle]) {
      stop = middle - 1;
    } else {
      start = middle + 1;
    }

    middle = Math.floor((start + stop) / 2);
  }

  if (list[middle] === value) {
    return value;
  }

  return -1;
}

function search() {
  debugger;
  const list = [2, 5, 8, 9, 13, 32, 37, 45, 67, 73, 77, 77, 78, 99];
  const index = binarySearch(list, 99);
}
