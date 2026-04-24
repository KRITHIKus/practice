Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;

  const fnSymbol = Symbol(); // avoid key collision
  context[fnSymbol] = this;

  const result = context[fnSymbol](...args);

  delete context[fnSymbol];
  return result;
};

let person= {
    name:"hack"
};

function greet(age){
    return `hi ${this.name} ${age}`
}
console.log(greet.myCall(person,20))



let obj={
    name:"love",
   
 reg: function(){
    let p = ar=>  this.name
    
    return p()
 }
}
let p1= obj.reg()
console.log(p1)


Array.prototype.myPush=function(...items){
    let length=this.length

    for(let i=0;i<items.length;i++){
        this[length]=items[i]
        length++
    }
    return length;
}

let arr =[1,2,3,4]
const newarr=arr.myPush(5)
console.log(arr)


Array.prototype.myPop=function(){
    if(this.length===0)return undefined

    let LI=this.length-1;
    let removed=this[LI]

    this.length=LI

    return removed
}


let val=arr.pop()
console.log(arr)
console.log(val)

Array.prototype.myShift=function(){
    if(this.length===0)return undefined

    let FI=this[0]
    

    this.length=LI

    return removed
}
