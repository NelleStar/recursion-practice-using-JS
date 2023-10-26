/** product: calculate the product of an array of numbers. */
function product(nums) {
  if(nums.length === 0) return 1;

  else {
    return nums[0]*product(nums.slice(1));
  };
}

/** longest: return the length of the longest word in an array of words. */
function longest(words) {
  if (words.length === 0) return 0;   

  if (words.length === 1) return words[0].length; 

  const firstWordLength = words[0].length;
  const restOfWordsLength = longest(words.slice(1));

  return firstWordLength >= restOfWordsLength ? firstWordLength : restOfWordsLength;
}


/** everyOther: return a string with every other letter. */
function everyOther(str) {
  if(str.length <= 1) return str;
  
  if(str.length > 1) return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */
function isPalindrome(str) {
  let string = str.toLowerCase();

  if(string.length <= 1) {
    return true;
  } else {
    if(string[0] === string[string.length - 1]) {
      return isPalindrome(string.slice(1, -1));
    } else {
      return false;
    }
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */
function findIndex(arr, val, currentIndex = 0) {
  if (currentIndex >= arr.length) return -1; 
  
  if (arr[currentIndex] === val) return currentIndex;

  return findIndex(arr, val, currentIndex + 1);
}



/** revString: return a copy of a string, but in reverse. */
function revString(str) {
  if(str === "") {
    return "";
  } else {
    const lastChar = str.slice(-1);
    const restChars = str.slice(0, -1);
    return lastChar + revString(restChars);
  }  

  
}

/** gatherStrings: given an object, return an array of all of the string values. */
function gatherStrings(obj) {
  let strings = [];

  for (let key in obj) {
    if(typeof obj[key] === 'string') {
      strings.push(obj[key]);
    } else if(typeof obj[key] === 'object') {
      strings = strings.concat(gatherStrings(obj[key]));
    }
  }
  return strings;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */
function binarySearch(arr, val, currentIndex = 0) {
    if (currentIndex >= arr.length) return -1;

    if (arr[currentIndex] === val) return currentIndex;

    return findIndex(arr, val, currentIndex + 1);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
