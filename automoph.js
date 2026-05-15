function auto(n){
   let sq=n*n
    let temp=n
    let digit=0
    while(temp>0){
        digit++;
        temp=Math.floor(temp/10)
    }
   let power=1;
   for(let i =0;i<digit;i++){
    power*=10
   }
  let lastDigit=sq % power;
    return lastDigit===n
}

console.log(auto(376))




Array.prototype.myunshift=function(...items){
    let count=items.length
    for(let i=this.length-1;i>=0;i--){
this[i+count]=this[i]
    }
    for(let j=0;j<items.length;j++){
        this[j]=items[j]
    }
    return this.length
}
let arr=[1,2,3,4]
arr.myunshift(5)
console.log(arr)


function isplai(str){
let cstr=str.toLowerCase().replace(/\s+/g,"");
let first=0;
let last=cstr.length-1

while(first<last){
    if(cstr[first]!== cstr[last]){
        return `${str} is not a plaindrome`
    }
    first++;
    last--
}
return `${str} is  plaindrome`
}
console.log(isplai("A man a plan a canal Panama"))