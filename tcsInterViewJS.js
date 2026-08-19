// Question 1.  make it string in camel case.
//Answer
function toCamelCase(str) {
  let result = "";
  let makeUppercase = false;

  for (let i = 0; i < str.length; i++) {
    const character = str[i];

    if (character === " " || character === "-" || character === "_") {
      makeUppercase = true;
      continue;
    }

    if (makeUppercase) {
      result += character.toUpperCase();
      makeUppercase = false;
    } else {
      result += character.toLowerCase();
    }
  }

  return result;
}

console.log(toCamelCase("hello world javascript"));
// helloWorldJavascript

console.log(toCamelCase("hello-world-javascript"));
// helloWorldJavascript

//Question 2. Make some number of the array value.
//Answer
function sumArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }

  return sum;
}

const numbers = [10, 20, 30, 40];

console.log(sumArray(numbers)); // 100

//Question 3. check Palindrome number in JavaScript
//Answer 
function isPalindrome(number) {
  if (number < 0) return false;

  const originalNumber = number;
  let reversedNumber = 0;

  while (number > 0) {
    const lastDigit = number % 10;

    reversedNumber = reversedNumber * 10 + lastDigit;

    number = Math.floor(number / 10);
  }

  return originalNumber === reversedNumber;
}

console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false
console.log(isPalindrome(1331)); // true


