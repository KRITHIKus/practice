function fact(num) {
  let facts = 1;
  for (let i = 1; i <= num; i++) {
    facts *= i;
  }
  return facts;
}

function iistrong(n) {
  let sum = 0;
  let str = n.toString();

  for (let digits of str) {
    let a = Number(digits);
    sum += fact(a);
  }
  return sum === n;
}

console.log(iistrong(145));

function arms(num) {
  let val = num.toString();
  let power = val.length;
  let sum = 0;
  for (let digit of val) {
    let d = Number(digit);
    let mul = 1;
    for (i = 0; i < power; i++) {
      mul *= d;
    }
    sum += mul;
  }
  return sum === num;
}

console.log(arms(25));

function isfact(num) {
  let fact = 1;

  for (let i = 1; i < num; i++) {
    fact *= i;
  }
  return fact;
}

function istrong(num) {
  let digit = 0;
  let temp = num;
  let sum = 0;
  while (temp > 0) {
    digit = temp % 10;

    let n = fact(digit);
    sum += n;
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

console.log("istrong: ",istrong(145))


function isprime(num){
    let isprime=false
if(num%2===0)return false
if(num===2)return true
if(num<1)return false

for(let i=3;i<Math.sqrt(num);i+=2){
    if(num%i===0){
        isprime=false
    }
}
isprime=true
return isprime
}
console.log(isprime(23))

function listss(num){
    let arr=[]

    for(let i=2;i<= num;i++){
isprime=true
        for(let j=2;j<=Math.sqrt(i);j++){
            if(i%j===0){
                isprime=false;
                break
            }
        }
        if(isprime){
            arr[arr.length]=i
        }
    }
    return arr
}
console.log(listss(7))