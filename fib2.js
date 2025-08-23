// function abb (count){
//     let n1=0;n2=1
//     let seq=[n1,n2]
// for (let i =2 ;i<=count;i++){
//     n3 = n1 + n2;
//     seq.push(n3)
    
//     n1 = n2 ;
//     n2 = n3
    

// }
// return seq
// }
// let res = abb(5)
// let res1 = []
// for (i=res.length - 1;i>=0  ;i--)
// {
//     res1.push(res[i])
// }
// console.log(`original ${res}`)
// console.log(`reversed using for ${res1}`)
// console.log(res.reverse())
// console.log(typeof res1)


// let a =[10 ,21,33 ,12,202,19]
// let a1 =[]
// let a2 =[]
// for (i = a.length-1;i>=0;i--){
//    a1.push(a[i])
//     if(a[i]%2 ===0){
//         a2.push(a[i])
//     }
// }
// console.log(a)
// console.log(a1)
// console.log(a2)

// function fibon(count){
//     let a1,a2,sum;
//     a1=0,a2=1
//     let arr = [a1,a2]
//     let a3=[]
//     sum = a1 + a2
//     for(i=2;i<=count;i++){
//         n3 = a1+a2
//         arr.push(n3)
//         a1=a2;
//         a2=n3
// sum += n3
//         if (arr[i]%2==0){
//             a3.push(arr[i])
//         }
//     }
//     return {s :arr,a3 : a3 , sum:sum}
// }

// let res = fibon(10)
// console.log(res.sum)
// console.log(res.s)
// console.log(res.a3)


// function per (x){
//     s = Math.floor(Math.sqrt(x))
//     console.log(s)
//     return s * s === x;
// }
// function isfibon(num){
//     return per(5 * num * num -4 )|| per(5 * num * num  + 4 )
// }
// let n = 13
// let res = isfibon(n)
// let result = (res === true) ? console.log(`${n} is fibon `) : console.log(`${n} is not fibon `)


function fib(num){
    let a1,a2,arr;
    a1=0,a2=1;
    arr =[a1,a2];
   let len =2
    for(i=0; i<=num;i++){
        count = a1 + a2
        arr.push(count);
        len++
        a1=a2;
        a2=count;
        
    }
    return  {arr,len}
}
let val = 10
let res = fib(val);
console.log(res.arr,"<= origial series")
console.log(res.len,"<= original length")
let s = [...res.arr]
s = s.filter(num => num %2==0)
console.log(s)
// for (let i =s.length-1;i>=0;i--){
// if(s[i]%2!==0){
//     s.splice(i,1)
  
// }    
// }
// console.log(s.reverse())

for (let i = s.length-1;i>=0;i--)
{
    s.push(s[i])
}
console.log(`reversed fibon:${s}`)

