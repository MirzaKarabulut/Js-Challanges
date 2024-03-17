// Solution 1
function titleCase(str) {
  let upper = true;
  let newStr = "";
  l = str.length;
  for (let i = 0; i < l; i++) {
    if (str[i] == " ") {
      upper = true;
      newStr += str[i];
      continue;
    }
    newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase();
    upper = false;
  }
  return newStr;
}

const strTitle = titleCase("merHaba ben GeLDim");
console.log(strTitle);
