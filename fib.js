// let n1 ,  n2 
// n1=0,n2=1
// console.log(n1)
// console.log(n2)
// for(i=0;i<=10;i++){
//     let n3 = n1+n2
//     console.log(n3)
//     n1=n2;
//     n2=n3
// }

// function abb(count){
//     let seq = [0,1]

//     for(let i =2 ; i<=count;i++){
//         seq.push(seq[i-1] + seq[i-2])
//     }
//     return seq
// }console.log(abb(10))

// function isperfect(x){
//     let s = Math.floor(Math.sqrt(x));
//     return s * s === x
// }

// function isfbon(num){
//    return isperfect(5 * num  * num + 4) ||  isperfect(5 * num  * num - 4)
// }
// let n = 9
// var a = isfbon(n)
// if (a === true){
//     console.log(`${n} is fibonacci number`)
// } 
// else console.log (`${n} is not fib`)

//   function per (x){
//         s = Math.floor(Math.sqrt(x))
//     return    s * s === x ;
//     }
//     function fibon(num){
//         return per(5 * num * num - 4) ||  per(5 * num * num + 4 ) 
//     }
// function abb(count){
//     let n1,n2,sum;
//     n1=0;n2=1;sum=n1+n2;
//     let seq =[n1,n2]
//     for(i=2;i<=count;i++){
//         n3 = n1+n2
//         seq.push(n3)
//         n1=n2;
//         n2=n3;
//        sum += n3
//     }
//     return {f : n3 , b : sum , seq :  seq}
  
    
// }
// let res = abb(10)
// console.log(`sum is = ${res.b}`)
// console.log(`fibon sere= ${res.seq}`)
// console.log(`fib series is = ${res.f}`)

// if(fibon(res.f)===true){
//     console.log(`${res.f} is fibon`)
// }
// else{
//      console.log(`${res.f} is not fibon`)
// }


// function fibo(num){
// let n1=0,n2=1,n3;
// console.log(n1)
// console.log(n2)
// for(let i=2;i < num;i++){
//      n3 = n1 + n2
//      console.log(n3)
// n1=n2;
// n2=n3   
// }

// }fibo(10)


function fibo (num){
    let a1=0,a2=1
    let arr = [a1,a2]
    for (i = 2;i<=num;i++){
        n3 = a1+a2
        arr.push(n3)
        a1=a2;
        a2=n3
    }
    return arr
}

console.log(fibo(10))
