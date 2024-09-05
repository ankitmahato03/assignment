/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Step 1: Normalize the string (remove spaces and convert to lowercase)
  const normalizedStr = str.toLowerCase().replace(/[^a-z0-9]/gi, '');

  // Step 2: Reverse the normalized string
  const reversedStr = normalizedStr.split('').reverse().join('');

  // Step 3: Compare the original normalized string with the reversed one
  return normalizedStr === reversedStr;
}

module.exports = isPalindrome;

