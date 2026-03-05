function firstNonRepeating(str){
    let hashMap={}

    for(let ch of str){
        hashMap[ch]=(hashMap[ch]||0)+1
    }
    for(let i=0;i<str.length;i++){
        if(hashMap[str[i]]===1){
            return str[i]
        }
    }
    return null
}




function secLargest(arr){
    let max=-Infinity
    let secmax=-Infinity

    for(let i=0;i<arr.length;i++){
        let num=arr[i]
        if(max<num){
            secmax=max;
            max=num;
            
        }else if(secmax<num && num > max){
            secmax=num
        }
    }
        if(secmax===-Infinity)return null
   
    return secmax
}

console.log(secLargest([1,3,4,2]))


function strRev(str){
    let sentence=""
    let words=""

    for(let ch of str){
        if(ch!==" "){
            words+=ch
        }
        else{
            for(let i=words.length-1;i>=0;i--){
                sentence+=words[i]
            }
            words=""
            sentence+=" "
        }

    }
    if(words){
      for(let i=words.length-1;i>=0;i--){
                sentence+=words[i]
            }
            words=""
            sentence+=" "  
    }
    return sentence
}
console.log(strRev("hello world"))

function anagram(str1,str2){

    let cstr1=str1.toLowerCase().replace(/\s+/g,"")
    let cstr2=str2.toLowerCase().replace(/\s+/g,"")
    if(cstr1.length !== cstr2.length) return false
let hashMap={}
    for(let ch of cstr1){
        hashMap[ch]=(hashMap[ch]||0)+1
    }
    for(let ch of cstr2){
        if(!hashMap[ch]){
            return false
        }hashMap[ch]--
    }
    return true
}
console.log(anagram( "listen", "silent"))
console.log(anagram( "hello", "world"))





function dup(arr){
    let res=[]
    let count={}

    for(let i of arr){
        count[i]=(count[i]||0)+1
    }
    for(let j of arr){
        if(count[j]>1){
            res[res.length]=j
            count[j]=0
        }
    }
    return res.length < 0 ? "no duplicates":res
}

 console.log(dup([1,2,3,4,2,5,1,6]))

function vowels(str){
    let count=0;

   for(let ch of str){
    if(ch === "a" || ch=== "e" || ch=== "i" || ch=== "o" || ch=== "u"){
        count++
    }
   }
   return count===0 ? " no vowels": count
}

console.log(vowels("hello"))

// function dup(arr){
//     let res=[]
//     for(let i=0;i<arr.length;i++){
//         let idx=Math.abs(arr[i])-1
//         if(arr[idx]<0){
//             res[res.length]=Math.abs(arr[i])
//             arr[idx]=0
//         }else{
//             arr[idx]=-arr[idx]
//         }
//     }
//     return res
// }
// console.log(dup([1,2,3,4,2,5,1,6]))


