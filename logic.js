// let a = true
// console.log(!a>=5)

var a = [1,2,3.5,4,2.5,]
var b = a.reduce((acc,val)=> acc + val,0 )
console.log(b);
var c = a.map(a=> a*2)
console.log(c);
var d = c.filter(c => c %2==1)
console.log(d);