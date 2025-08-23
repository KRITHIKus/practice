function fib(n){
    let n0 = n
    let n1,n2;
    n1=0,n2=1;
    let a =[n1,n2];
    for(let i =2;i<=n0;i++){
       n3 = n1 + n2;
       a.push(n3)
       n1 = n2;
       n2=n3 
    }
    
    
   function per(x){
        let s = Math.floor(Math.sqrt(x));
        return s * s === x
    }
  function isfib(n){
        return per(5 * n * n -4 ) || per(5 * n * n +4 )
    }
    
    return {d:a,fib:isfib(n)}
}
let n1 =13
let f = fib(n1)
console.log(f.d )
let result1 = (f.fib === true )? console.log(`${n1} is a fibon`) : console.log(`${n1} is not a fibon`)

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

function rev(n){
    
    let a =[]
    for (i=1;i<=n;i++){
        a.push(i)
    }
    let res1 =[]
    for(i=a.length-1;i>=0;i--)
    {
        res1.push(a[i])
    }
return {a,res1}
}
let v = 6
let res =rev(v)

console.log(res.a)

let ress=res.a.filter(n => n%2===0)


console.log(ress)


