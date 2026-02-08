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