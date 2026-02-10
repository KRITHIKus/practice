function rem(arr){
    let res=[]
    let hash={}
    for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            hash[arr[i]]=true
            res[res.length]=arr[i]
        }
    }
    return res
} 
//console.log(rem([1,2,3,2,4,5,4]))


function tar(arr,n){
    let target=n
    let seen={}
    for(let i=0;i<arr.length;i++){
        let need=target-arr[i]
        if(seen[need]!==undefined){
            return {i,j:seen[need]}
        }
        seen[arr[i]]=need
        
    }
   
    return null
}
console.log(tar([2,7,3,11,1],3))

let seen={}
function count(arr){
    let hash={}
let res=[]
    for(let i=0;i<arr.length;i++){
        hash[arr[i]]=(hash[arr[i]]||0)+1
    }
    for(let i=0;i<arr.length;i++){
        if(hash[arr[i]]===2)
        {
            res[res.length]=arr[i]
            hash[arr[i]]=0
        }
    }
    return res
}

//console.log(count([4,3,2,7,8,3,2,1]))

function count2(arr){
    let res=[];

    for(let i=0;i<arr.length;i++){
        let idx=Math.abs(arr[i])-1

        if(arr[idx]<0){
            res[res.length]=Math.abs(arr[i])
            arr[idx]=0
        }else{
            arr[idx]=-arr[idx]
        }
    }
    return res
}
console.log(count2([4,3,2,7,2,8,3,2,1]))


function dup(arr){
    let slow=arr[0]
    let fast=arr[0]

    do{
      slow=arr[slow]
      fast=arr[arr[fast]]  
    }while(slow!==fast)

        slow=arr[0]
        while(slow!==fast){
              slow=arr[slow]
      fast=arr[arr[fast]]  
        }
return slow
}


//console.log(dup([1, 3, 4, 2, 2])); 