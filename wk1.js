function sum(arr,num){
    let target=num;
    let seen={}

    for(let i=0;i<arr.length;i++){
        let need=target-arr[i]
        if(seen[need]!==undefined){
            
            return{num_1:need,num_2:arr[i],target}
        }
        seen[arr[i]]=need
    }
    return null
}

console.log(sum([1,3,2,4,7,1],10))


let seen={1:2,2:3,4:1}
seen[1]=67
console.log(seen[1])


function deb(fn,delay){
    let handler;
    return function(){
        clearTimeout(handler)
        handler=setTimeout(() => {
            fn()
        }, delay);
    }
}

let search=deb(function(){
    console.log("text: 500 sec")
},500)
search()
search()