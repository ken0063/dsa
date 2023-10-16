function recursiveBinarySearch(list, target) {
  //binary search has to be sorted

  if (list.length === 0) {
    return false;
  } else {
    let mid = Math.floor(list.length / 2);
    let newList;

    if (list[mid] == target) {
      return true;
    } else if (list[mid] < target) {
      newList = list.slice(mid + 1);
      return recursiveBinarySearch(newList, target);
    } else {
      newList = list.slice(0, mid);
      return recursiveBinarySearch(newList, target);
    }
  }
}

function verify(res) {
  console.log("Target found:", res);
}

console.time("End");
const list = [1, 7, 3, 9, 5, 6, 8].sort();
const res = recursiveBinarySearch(list, 90);
verify(res);
console.timeEnd("End");
