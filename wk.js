// let arr1=[0,2,0,3,0,1,76]

// function moveZeros(arr){
//     let res=[]
//     let writeIndex=0;

//     for(let i =0;i<arr.length;i++){
//         if(arr[i]!==0){
//             res[writeIndex]=arr[i];
//             writeIndex++
//         }
//     }
//     while(writeIndex<arr.length){
//         res[writeIndex]=0
//         writeIndex++
//     }
//     return res
// }
// console.log(moveZeros(arr1))

// function rem(num,k){
//     let stack=[]
//     for(let i=0;i<num.length;i++){
//         let cur=num[i]
//         while(k>0 && stack.length>0 && stack[stack.length-1]>cur){
//             stack.pop();
//             k--
//         }
//         stack[stack.length]=cur
//     }
//     while(k>0 && stack.length>0){
//          stack.pop();
//             k--
//     }
//     let result =""
//     let leadingZeros=true
//     for(let i=0;i<stack.length;i++){
//         if(leadingZeros && stack[i]==="0"){
//             continue
//         }
//         result+=stack[i]
//     }
//     return result
// }
// console.log(rem("1432219",3))


function missingDigits(arr){

    for(let i=0;i<arr.length;i++ ){
        let key =arr[i]
        let j=i-1
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
        
    }
   

    let num=""

    for(let i =0;i<arr.length;i++){
        let curr=arr[i]
        let next=arr[i+1]
        for(let n=curr+1;n<next;n++){
            num+=n+" "
        }
    }
    return num
}

console.log(missingDigits([1, 2, 4, 5]))

function anagram(str1,str2){
    if(str1.length !== str2.length) return false

let cleanStr1=str1.toLowerCase().replace(/\s+/g,"")
let cleanStr2=str2.toLowerCase().replace(/\s+/g,"")

    let hashMap={}

    for(let ch of cleanStr1){
        hashMap[ch]=(hashMap[ch]||0)+1
    }
    for(let ch of cleanStr2){
        if(!hashMap[ch]){
            return false
        }
        hashMap[ch]--
    }
    return true
}

console.log(anagram("Listen", "silent"))
console.log(anagram("hello", "world"))


function Dup(arr){
    let hashMap={}
let res=[]
    for(let n of arr){
        hashMap[n]=(hashMap[n]||0)+1
    }
    for(let key in arr){
        if(hashMap[key]>1){
        res[res.length]=Number(key)

        }
    }
    return res
}
console.log(Dup([1,2,3,2,3,4]))


function createCounter() {
    let n=0
    
 return function(){
    n++
    return n
 }
}

let counter=createCounter()

console.log(counter())
console.log(counter())
console.log(counter())


function myPromiseAll(promises) {
  return new Promise((resolve,reject)=>{
    let results=[]
    let count=0
  if(promises.length===0) return resolve([])
    for(let i =0;i<promises.length;i++){
        promises[i]
        .then(value=>{
            results[i]=value
            count++;

            if(count===promises.length){
                resolve(results)
            }
        })
        .catch(reject)
    }
  })
}

const p1 = Promise.resolve(10);
const p2 = new Promise(res => setTimeout(() => res(20), 1000));
const p3 = Promise.resolve(30);

myPromiseAll([p1, p2, p3])
  .then(res => console.log(res)); 


  function flatten(arr){
    let res=[]

    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])){
           let faltArray=flatten(arr[i])
        for(let j=0;j<faltArray.length;j++){
            res[res.length]=faltArray[j]
        }
        }else{
            res[res.length]=arr[i]
        }
        
    }
    return res
  }

console.log(flatten([1, [2, [3, 4]], 5]))