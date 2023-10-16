function binarySearch(list, target) {
  //binary search has to be sorted

  //   In JavaScript, the default behavior of the sort() method converts elements to strings and sorts them based on their Unicode code points. This may lead to incorrect sorting for numbers.
  // To fix the issue, you should pass a comparison function to the sort() method, which handles numeric sorting properly.
  const sortedList = list.slice().sort((a, b) => a - b);
  let first = 0;
  let last = sortedList.length - 1;

  while (first <= last) {
    let mid = Math.floor((first + last) / 2);
    console.log(mid);
    if (sortedList[mid] == target) {
      return mid;
    } else if (sortedList[mid] < target) {
      first = mid + 1;
    } else {
      last = mid - 1;
    }
  }
}

function verify(index) {
  if (index != undefined) {
    console.log("Target found at index:", index);
  } else {
    console.log("Target not in list");
  }
}

console.time("End");
const res = binarySearch([1, 7, 3, 9, 5, 6, 8, 4], 4);
verify(res);
console.timeEnd("End");
