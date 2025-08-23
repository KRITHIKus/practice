function year(n){
    return (n %4===0 & n %100!=0) || (n%400===0)
}
let val = 1900
let res = year(val)
res= (res===true) ? console.log(`${val} is leap year`) : console.log(`${val} is not leap year`)