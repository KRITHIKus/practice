function dup(arr) {
  let res = [];
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = true;
      res[res.length] = arr[i];
    }
  }
  return res;
}
console.log(dup([5, 3, 8, 3, 9, 5, 1]));

function seclarge(arr) {
  let max = -Infinity;
  let secmax = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    if (curr > max) {
      secmax = max;
      max = curr;
    } else if (curr < max && secmax < curr) {
      secmax = curr;
    }
  }
  return secmax === -Infinity && max !== -Infinity ? null : secmax;
}

console.log(seclarge([10, 5, 8, 20, 15]));

function rev(str) {
  let res = "";
  let words = "";

  for (let ch of str) {
    if (ch !== " ") {
      words += ch;
    } else {
      res = words + " " + res;
      words = "";
    }
  }
  if (words.length !== 0) {
    res = words + " " + res;
  }
  return res;
}

console.log(rev("tcs coding test"));

function vowels(str) {
  let count = 0;
  let cleanstr = str.toLowerCase().replace(/\s+/g, " ");

  for (let ch of cleanstr) {
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
      count++;
    }
  }
  return count;
}
console.log(vowels("javascript"));

function isPalindrome(num) {
  let ld = 0;
  let rev = 0;
  let org = num;
  while (org > 0) {
    ld = org % 10;
    rev = rev * 10 + ld;
    org = Math.floor(org / 10);
  }
  return rev === num;
}
console.log(isPalindrome(121));
console.log(isPalindrome(124));

function moveZeros(arr) {
  let writeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
    }
  }
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }
  return arr;
}
console.log(moveZeros([1, 0, 2, 0, 4, 0, 5]));

function sum(arr, k) {
  let seen = {};
  let res;
  for (let i = 0; i < arr.length; i++) {
    let need = k - arr[i];
    if (seen[need] !== undefined) {
      res = [i, seen[need]];
      return res;
    }
    seen[arr[i]] = i;
  }
  return null;
}
console.log(sum([2, 7, 11, 15], 9));

function count(str) {
  let word = "";
  let maxword = "";

  for (let ch of str) {
    if (ch !== " ") {
      word += ch;
    } else {
      let maxlen = 0,
        wordlen = 0;

      for (let j = 0; word[j] !== undefined; j++) wordlen++;
      for (let j = 0; maxword[j] !== undefined; j++) maxlen++;

      if (maxlen < wordlen) {
        maxword = word;
      }
      word = "";
    }
  }
  return maxword;
}
console.log(count("javascript coding challenge"));

function ana(str1, str2) {
  let cstr1 = str1.toLowerCase().replace(/\s+/g, " ");
  let cstr2 = str2.toLowerCase().replace(/\s+/g, " ");
  let freq = {};

  for (let ch of cstr1) {
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let ch of cstr2) {
    if (!freq[ch]) {
      return false;
    }
    freq[ch]--;
  }
  return true;
}
console.log(ana("silent", "listen"));
function substring(str) {
  let cstr = str.toLowerCase().replace(/\s+/g, " ");
  let maxlen = 0;
  let start = 0;
  let seen = {};
  for (let i = 0; i < cstr.length; i++) {
    let char = cstr[i];

    if (seen[char] >= start) {
      start = seen[char] + 1;
      break;
    }
    seen[char] = i;

    let currlen = i - start + 1;
    if (maxlen < currlen) {
      maxlen = currlen;
    }
  }
  return maxlen;
}
console.log(substring("abcabcbb"));


function arrRotate(arr,k){
    let n=arr.length;
    k=k%n

    reverse(0,n-1)
    reverse(0,k-1)
    reverse(k,n-1)

    return arr
}
console.log(arrRotate([1,2,3,4,5],3))

let arr=[1,2,3,4,5]
console.log(arr.length)