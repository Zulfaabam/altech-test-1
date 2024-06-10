const {
  printFishBash,
  sortArrAsc,
  sortArrDesc,
  isPalindrome,
} = require("./altech-test-1");

test("should throw an error if parameter is not a number", () => {
  expect(() => printFishBash("string")).toThrow("parameter should be a number");
  expect(() => printFishBash(null)).toThrow("parameter should be a number");
  expect(() => printFishBash(undefined)).toThrow(
    "parameter should be a number"
  );
});

test("should return correct output for number 1", () => {
  expect(printFishBash(1)).toEqual(["1"]);
});

test("should return correct output for number 3", () => {
  expect(printFishBash(3)).toEqual(["1", "2", "fish"]);
});

test("should return correct output for number 5", () => {
  expect(printFishBash(5)).toEqual(["1", "2", "fish", "4", "bash"]);
});

test("should return correct output for number 15", () => {
  expect(printFishBash(15)).toEqual([
    "1",
    "2",
    "fish",
    "4",
    "bash",
    "fish",
    "7",
    "8",
    "fish",
    "bash",
    "11",
    "fish",
    "13",
    "14",
    "fishbash",
  ]);
});

let arr = [2, 1, 3];

test("should return ascending array", () => {
  expect(sortArrAsc(arr)).toStrictEqual([1, 2, 3]);
});

test("should return descending array", () => {
  expect(sortArrDesc(arr)).toStrictEqual([3, 2, 1]);
});

test("should return false if not a string", () => {
  expect(isPalindrome(1)).toBe(false);
  expect(isPalindrome(null)).toBe(false);
  expect(isPalindrome(undefined)).toBe(false);
});

test("should return true if it's a palindrome", () => {
  let palindrome = "hannah";

  expect(isPalindrome(palindrome)).toBe(true);
});

test("should return false if it's not palindrome", () => {
  let notPalindrome = "haha";

  expect(isPalindrome(notPalindrome)).toBe(false);
});
