function letter(n){
    let rv= ""
    let count ={}
    for(let i=0;i<n.length;i++){
        rv +=n[i]
        let ch =n[i]
         count[ch]=(count[ch]||0)+1
        }
    return {sub : rv,counts : count }
}

var r1 =letter('maadammr')
console.log(r1.sub,r1.counts)
var r2=r1.counts;
console.log(`${r2["d"]} = ${r2["d"]}`)
if(r1===letter(r1)) console.log('true')
    else console.log(`${r1['']} false and ${r2['d']}`)
let a = r1.sub;
let str =''
for(i=a.length-1;i>=0;i--){
str +=a[i]
}
console.log(str)