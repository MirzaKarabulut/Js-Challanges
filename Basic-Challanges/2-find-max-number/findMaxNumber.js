function findMaxNumber(number) {
  if (number === null) {
    return undefined;
  }
  let maxNumber = number[0];
  for (let i = 1; i < number.length; i++) {
    if (number[i] > maxNumber) {
      maxNumber = number[i]
    }
  }
  return maxNumber;
}


const x = findMaxNumber([1,2,4,3,7,11,6,5]);
console.log("Max number = " + x);

// NEW WAYS 1

let numbers = [1, 4, 2, 9, 8, 7, 12, 5];
let findMaxNum = Math.max(...numbers);
console.log(findMaxNum); 

// NEW WAYS 2

let num = [2, 4, 6, 7, 9, 10, 1];
let max = num.reduce((acc, curr) => {
  return Math.max(acc, curr);
}, num[0]);
console.log(max);