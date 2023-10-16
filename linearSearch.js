function linearSearch(list, target) {
  for (let i = 0; i <= list.length; i++) {
    if (list[i] === target) {
      return i;
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
const res = linearSearch([1, 2, 3, 4, 5, 6, 7], 6);
verify(res);
console.timeEnd("End");
