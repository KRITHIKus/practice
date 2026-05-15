let data= require("./d2.json")
let data1= require("./d.json")


function grp(info){
    let res=[]
    let data=info.data

    res[res.length]=`title: ${data.title}, desc: ${data.description}`

    return res
}
//console.log(grp(data))


function isactive(users){
let res={}

for(let i=0;i< users.length;i++){
    let active=users[i].isActive;

    if(!res[active]){
        res[active]=[]
    }
if(active){
    res[active][res[active.length]]=users[i]
}

}
return res
}
console.log(isactive(data1))


function arrmove(arr){
    let writeIndex=0;

    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[writeIndex]=arr[i]
             writeIndex++
        }
       
    }
    while(writeIndex < arr.length){
        arr[writeIndex]=0
        writeIndex++
    }
    return arr
}

//console.log(arrmove([0,1,0,2,3,0,4,5]))


function arrRotate(arr,k){
    let n=arr.length
    k=k%n

    function rotate(arr,first,last){
        while(first<last){
            let temp=arr[first]
            arr[first]=arr[last]
            arr[last]=temp

            first++;
            last--
        }
    }
    rotate(arr,0,n-1)
    rotate(arr,0,k-1)
    rotate(arr,k,n-1)

    return arr
}

//console.log(arrRotate([1,2,3,4,5],3))

