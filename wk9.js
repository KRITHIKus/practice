const ausers = [
  { id: 1, name: "Amit", active: true },
  { id: 2, name: "Sara", active: false },
  { id: 3, name: "Raj", active: true }
];


function isActive(data){
    
    let str=""

    for(let i=0;i<data.length;i++){
        let users=data[i]
        
        if(users.active===true){
            str+=users.name+","
        }
    }
    return str
}

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 20 },
  { name: "C", age: 21 }
];

function grp(data){
    let res={};

    for(let i=0;i<data.length;i++){
let age=data[i].age
        if(!res[age]){
            res[age]=[]
        }
     res[age] =res[age] ? [...res[age],data[i]]:data[i]
    }
    return res
}

console.log(grp(users))

function rem(arr){
    let res=[]
    let hash={}

    for(let i=0;i<arr.length;i++){
        let j=i-1
        let key=arr[i]
        while(j>=0 && arr[j]>key){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=key
    }

    for(let i=0;i<arr.length;i++){
        if(!hash[arr[i]]){
            hash[arr[i]]=true
            res[res.length]=arr[i]
        }
    }
    return res
}
console.log(rem([1, 2, 2, 3, 4, 4, 5]))


function debounce(fn,delay){
    let handler;
    return function(){
        clearTimeout(handler)
        handler=setTimeout(()=>{
            fn()
        },delay)
    }
}

let debText= debounce(function(){
    console.log("delayed text")
},500)
debText()

function charCount(str){
    let hashMap={}

    for(let ch of str){
        hashMap[ch]=(hashMap[ch]||0)+1
    }
    return hashMap
}
console.log(charCount( "aabbccdde"))

function flatten (arr){
    let res=[]
    for(let i =0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            res[res.length]=arr[i]
        }else{
            let flattenArr=arr[i]
            for(let j=0;j<=flatten.length;j++){
                res[res.length]=flattenArr[j]
            }
        }
    }
    return res
}
console.log(flatten([1, 2, [3, 4], [5, 6]]))