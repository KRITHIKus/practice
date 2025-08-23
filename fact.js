// function fact(num){
//    let  result = 1
//     for (let i=1;i<=num;i++){
//         result *= i
//     }
//     return result
// }
// console.log(fact(5))

function fact(num){
    let a = []
    let result = 1
    count = 0;
    sum = 0;
    for(let i =1 ;i<=num;i++){
         result *=i
         count++
    a.push(result)  

sum += result
    }
   return {a,sum,count}
}
let val = fact(10)
console.log(val)
let even = [...val.a]
even = even.filter(num=>num%2===0)
console.log(even)
console.log(even.length)
let rev = []


for (let i = even.length -1 ; i>=0;i--){
    rev.push(even[i])
   
}
console.log(`reversed : ${rev}`)
let big = rev[0];
for(let i = 1;i< rev.length;i++){
    if(rev[i] < big){
        big = rev[i]
    }
    
}
console.log(`samll: ${big}`)
if (big %2!==0) console.log("true")
console.log(`sum ${sum}`)
console.log("lenght of series",count)