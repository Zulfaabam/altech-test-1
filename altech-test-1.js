function printFishBash(n) {
  if (typeof n !== "number") {
    throw new Error("parameter should be a number");
  }

  const results = [];

  for (let i = 1; i <= n; i++) {
    let output = "";

    if (i % 3 === 0) {
      output += "fish";
    }

    if (i % 5 === 0) {
      output += "bash";
    }

    if (output === "") {
      output = i.toString();
    }

    console.log(output);
    results.push(output);
  }

  return results;
}

console.log("===print fish bash===");
printFishBash(15);
console.log("==================================");

function sortArrAsc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log("sort array ascending", arr);
  return arr;
}

sortArrAsc([9, 8, 6, 10, 324, 4, -1, 0, 32]);
console.log("==================================");

function sortArrDesc(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  console.log("sort array descending", arr);
  return arr;
}

sortArrDesc([9, 8, 6, 10, 324, 4, -1, 0, 32]);
console.log("==================================");

function isPalindrome(str) {
  if (typeof str !== "string") return false;

  str = str.toLowerCase().replace(/\s/g, "");

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

console.log("is hannah a palindrome?", isPalindrome("hannah"));
console.log("is haha a palindrome?", isPalindrome("haha"));

module.exports = { printFishBash, sortArrAsc, sortArrDesc, isPalindrome };
