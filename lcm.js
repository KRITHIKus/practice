function gcd(a,b){
    while(b!==0){
        let temp = b;
        b=a%b;
        a = temp;
    }
    return a
}

function lcm(a,b){
    return Math.abs(a*b) / gcd(a,b)
}
function arraylcm(num){
    if(num.length===1){
        return num[0];
    }
    return num.reduce((res,num)=>lcm(res,num))
}

console.log(arraylcm([90,70]))
console.log(gcd1(90,70))
console.log(arrhcf([90,70]))

function gcd1(a,b){
while (b!==0){
    let temp = b;
    b = a%b;
    a= temp 
}
return a
}

function arrhcf(num){
    if(num.length===0){
        return console.log("array cannot be empty")
    }
    if(num.length===1){
        return num[0]
    }
    return num.reduce((res,num)=>gcd1(res,num))
}


