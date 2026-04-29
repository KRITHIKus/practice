function req(str,k){
  let word=""
  let count=0
  for(let ch of str){
    if(ch!==" "){
      word+=ch
    }else{
      count++
      if(count===k)return word
      word=""
    }
    
  }
  return null
}

console.log(req("i love js",1))

function arrrotate(arr,k){
  let n=arr.length
  k=k%n

  function rotate(arr,start,end){
    while(start < end){
      let temp=arr[start];
      arr[start]=arr[end]
      arr[end]=temp
      start++
      end--
    }
  }
  rotate(arr,0,n-1)
  rotate(arr,0,k-1)
  rotate(arr,k,n-1)

  return arr
}
console.log(arrrotate([1,2,3,4,5],3))


function substr(str){
  let seen={}
  let maxlen=0
  let start=0
  let bestStart=0
let cstr=str.toLowerCase().replace(/\s+/g," ")
  for(let i=0;i<cstr.length;i++){
    let ch = cstr[i]

    if(seen[ch] !== undefined && seen[ch]>= start){
      start=seen[ch]+1
      
    }
    seen[ch]=i
    

    let currlen=i-start+1
    maxlen=Math.max(maxlen,currlen)
    bestStart=start

   
  }
   let longeststr=""
   for(let i=bestStart;i<cstr.length;i++)
    longeststr+=cstr[i]
  return {maxlen,longeststr}
}
console.log(substr("abbabaabcdefhj"))

