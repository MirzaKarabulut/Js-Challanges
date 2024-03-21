function isPalindrome(str) {
  let i = str.length - 1;
  let reversed = "";
  if (str === "") {
    return true;
  }
  while (i >= 0) {
    reversed = reversed + str[i];
    i--;
  }
  if (reversed == str) {
    return true;
  } else {
    return false;
  }
}

const isP = isPalindrome("racecar");
console.log(isP);
