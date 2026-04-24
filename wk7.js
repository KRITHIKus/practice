function rem(arr){
    let hash={}
let res=[]
    for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            hash[arr[i]]=true;
            res[res.length]=arr[i]
        }
    }
    return res
}
console.log(rem([1,2,3,4,2,3,5]))

function sub(str){
    let hash={}
    for(let ch of str){
        hash[ch]=(hash [ch]||0)+1
    }
    for(let ch of str){
        if(hash[ch]===1){
            return ch
        }

    }
    return "no repeating character"
}
console.log(sub("aabccdeff"))



let data=[
  { name: "Alice", age: 21 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 21 },
  { name: "David", age: 25 },
  { name: "Eve", age: 30 }
]


function grp(info){
let res={};

for(let i =0;i<info.length;i++){
    let age=info[i].age
    let users=info[i]
    if(!res[age]){
        res[age]=[]
    }
    res[age][res[age].length]=users.name
}
return res
}

console.log(grp(data))


function deb(fn,delay){
    let handler;
    return function(){
         clearTimeout(handler)
        handler=setTimeout(()=>{
            fn()
        },delay)
       
    }
}

let search=deb(function(){
    console.log('text serach')
},500)

search()
