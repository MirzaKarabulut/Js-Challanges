function countOccurrences(str, findInStr) {
  let i = 0;
  let count = 0;
  if (str === null) {
    return 0;
  } else {
    while (str[i]) {
      if (str[i] === findInStr) {
        count++;
      }
      i++;
    }
    return count;
  }
}

const x = countOccurrences("merhabalar", "a");
console.log(x);