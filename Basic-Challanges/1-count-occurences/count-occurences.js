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

const x = countOccurrences("hello","l");
console.log(x);

// NEW WAYS

const countOccurrences = (str, char) => {
  console.log(str.split(char).length - 1);
}

countOccurrences("hello world","o");