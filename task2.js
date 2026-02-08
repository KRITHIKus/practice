function remove(num,k){
    let stack=[]

    for(let i=0;i<num.length;i++){
        let curr=num[i]
        
        while(k>0 && stack.length>0 && stack[stack.length-1]>curr){
            stack.pop()
            k--
        }
        stack[stack.length]=curr
    }

   

    while(k>0 && stack.length>0){
        stack.pop()
        k--;
    }
     let result="";
    let leadingZeros=true;

    for(let i=0;i<stack.length;i++){
        if(leadingZeros && stack[i]==="0"){
            continue
        }
        leadingZeros=false;
        result+=stack[i]
    }
    return result===""?"0":result
}

// console.log(remove("1432219", 3)); // "1219"
// console.log(remove("10200", 1));   // "200"
// console.log(remove("10", 2));      // "0"
// console.log(remove("12345", 2));   // "123"


function moveZeros(arr) {
  let writeIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[writeIndex] = arr[i];
      writeIndex++;
      console.log(writeIndex)
    }
    
  }
 
  while (writeIndex < arr.length) {
    arr[writeIndex] = 0;
    writeIndex++;
  }
  return "h";
}
console.log(moveZeros([0, 1, 0, 3, 12]));
