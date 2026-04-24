function corr(arr,k){
let seen={}
    for(let i=0;i<arr.length;i++){
let need=k-arr[i]
if(seen[need]!==undefined ){
    return {n1:need,n2:arr[i]}
}
seen[arr[i]]=need
    }
    return null
}
console.log(corr([1,3,2,4,5],4))


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
  return {maxlen,seen,start};
}
console.log(substring("abcdabcbb"));
