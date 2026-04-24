function substr(str){
    let seen={};
    let maxlen=0
    let cstr=str.toLowerCase().replace(/\s+/g," ")
    let start=0

    for(let i=0;i<cstr.length;i++){
        let char=cstr[i]

        if(seen[char] >= maxlen){
            start=seen[char]+1
            break
        }
        seen[char]=i

        let currlen= i-start+1
        if(maxlen<currlen){
            maxlen=currlen
        }
    }
    return {seen,maxlen}
}
//console.log(substr("abababcdef"))


function movezeroes(arr){
    let writeIndex=0;

    for(let i=0;i<arr.length;i++){
        
        if(arr[i]!==0){
            arr[writeIndex]=arr[i]
            writeIndex++
        }
    }
        while(writeIndex < arr.length ){
            arr[writeIndex]=0
            writeIndex++
        }
    
    return arr
}
//console.log(movezeroes([0,1,6,2,0,9,3,0]))


function pali(str){
    let cstr=str.toLowerCase().replace(/\s+/g,"")
    let right=cstr.length-1
    let left=0

    while(left<right){
        if(cstr[left]!==cstr[right]){
            return "not palindrome"
        }
        left++;
        right--;
    }
    return str+" :is palindrome"
}

console.log(pali("A man a plan a canal Panama"))