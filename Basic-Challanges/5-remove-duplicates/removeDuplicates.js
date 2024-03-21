function removeDuplicates1(any) {
  let uniqueArr = [];
  for (let i = 0; i < any.length; i++) {
    if (!uniqueArr.includes(any[i])) {
      uniqueArr.push(any[i]);
    }
  }
  return uniqueArr;
}

function removeDuplicates2(any) {
  return Array.from(new Set(any));
}

const a = removeDuplicates1([
  1,
  2,
  3,
  4,
  5,
  true,
  1,
  "hello",
  2,
  3,
  "hello",
  true,
]);
const b = removeDuplicates2([1, 2, 3, 4, 4, true, 1, 2, 3, "hello", true]);
console.log(b);
