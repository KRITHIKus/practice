let arr = [4, 2, 1, 2, 3, 4, 5, 1];
function sort(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < res.length; j++) {
      if (arr[i] === res[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      res[res.length] = arr[i];
    }
  }

  for (let i = 1; i < res.length; i++) {
    let key = res[i];
    let j = i - 1;
    while (j >= 0 && res[j] > key) {
      res[j + 1] = res[j];
      j--;
    }
    res[j + 1] = key;
  }
  return res;
}

console.log(sort(arr));

function isPalindrome(str) {
  let cleanString = str.toLowerCase().replace(/\s+/g, "");
  let left = 0;
  let right = cleanString.length - 1;
  while (left < right) {
    if (cleanString[left] !== cleanString[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}
console.log("check1", isPalindrome("madam"));
console.log("check2", isPalindrome("A man a plan a canal Panama"));

function firstNonRepeating(arr) {
  let hashMap = {};

  for (let i = 0; i < arr.length; i++) {
    hashMap[arr[i]] = (hashMap[arr[i]] || 0) + 1;
  }
  for (let j = 0; j < arr.length; j++) {
    if (hashMap[arr[j]] === 1) {
      return arr[j];
    }
  }
  return -1;
}
console.log(firstNonRepeating([1, 2, 1, 2]));

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
console.log(moveZeros([0, 1, 0, 3, 12]));


function charCount(str) {
  let cleanString=str.toLowerCase().replace(/\s+/g,"")
let charFrequency={}
for(let ch of cleanString){
    charFrequency[ch]=(charFrequency[ch]||0)+1
}
return charFrequency
}

console.log(charCount("Hello World"))


function secondLargest(arr) {
 if(arr.length<1)return null
 let max=-Infinity
 let secmax=-Infinity

 for(let i=0;i<arr.length;i++){
    let num=arr[i]

    if(num>max){
        secmax=max
        max=num;
        
    }else if(num < max && num > secmax){
        secmax=num
    }
 }
 return secmax === -Infinity && max !== -Infinity ?  null : secmax
}
console.log(secondLargest([10, 5, 20, 20, 8]))
console.log(secondLargest([-5, 5, 5]))