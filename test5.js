function fib(n){
    let n1,n2;
    n1=0,n2=1;
    let res = [n1,n2]
    
    for(i=2;i<=n;i++){
        n3=n1+n2;
        res.push(n3)
        
        n1=n2;
        n2=n3;
    } 
 return res
}

let a =fib(5)
console.log(a)
let res1=[]
for(i=a.length-1;i>=0;i--){
    if(a[i]%2==0){
        res1.push(a[i])
    }
}


console.log(res1,"even")


function fact(n){
    let fact=1
    let res=[];
    
}