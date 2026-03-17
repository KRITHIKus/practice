function sort(arr){
    let res=[];
    let hashMap={}

    for(let i of arr){
        hashMap[i]=(hashMap[i]||0)+1
    }
   let items=[]
   for(let key in hashMap){
    items[items.length]=[Number(key),hashMap[key]]
   }
   for(let i =1;i<items.length;i++){
    let key=items[i]
    let j=i-1
    while(j>=0 && items[j][1]>key[1]){
        items[j+1]=items[j]
        j--
    }
    items[j+1]=key
   }
   for(let i=0;i<items.length;i++){
    res[res.length]=items[i][0]
   }
   return res
}

console.log(sort([1,1,2,2,2,3,3,3,3,4]))

// let input=Number(prompt("enter a number"))

function prime(num){
    if(num ===2) return true
    if(num%2===0)return false
    if(num<=1) return false

    for(let i=3; i<=Math.sqrt(num);i+=2){
        if(num%i===0){
                return false
        }
    }
    return true
}

console.log(prime(9))

let res=[]
for(let i =2;i<=100;i++){
    if(prime(i)){
res[res.length]=i
    }
}
console.log(res) 

function fact(n){
    let fact=1;
    let i=1
    while(fact < n){
        i++
        fact*=i
    }
    return fact===n
}
console.log(fact(120))

function isPer(x){
    let sq=Math.floor(Math.sqrt(x))
    return x*x===sq
}

function isFibon(num){
    return isPer(5*num*num-4)|| isPer(5*num*num+4)
}
console.log(`${isFibon(1)}` ? "is fibon":"no fibon")

function auto(num){
    let count=0;
    let temp=num
    let sq=num*num
    while(temp>0){
count++;
temp=Math.floor(temp/10)
    }
  let power=1
    for(let i=0;i<count;i++){
        power*=10;
    }
    let LD=sq%power
    
   
   return {answ:LD===num,LD}
}

console.log(auto(235))
console.log(235*235)

function arm(n){
    let count=0;
    let temp=n;
    while(temp >0){
        count++;
        temp=Math.floor(temp/10)
    }
    let sum=0
    temp=n
    while(temp>0){
        let digit=temp%10;
       
let mul=1
        for(let i=0;i<count;i++){
            mul*=digit
        }
        sum+=mul
     
temp=Math.floor(temp/10)

    }
    
return sum===n
}
console.log(arm(153))