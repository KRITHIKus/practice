function fact(num){
    let facts= 1
    for (let i=1;i<=num;i++){
facts*=i
}
return facts
} 

function istrong(n){
    let sum=0;
    let str = n.toString()

    for(let digits of str){
    let a = Number(digits)
    sum +=fact(a)
    }
    return sum === n
}

console.log(istrong(145))

function arms(num){
    let val = num.toString();
    let power = val.length;
    let sum =0 
    for(let digit of val){
        let d = Number(digit);
 let mul =1 
 for (i=0;i<power;i++){
mul*=d
 }
 sum +=mul
    }
    return sum===num
}

console.log(arms(25))