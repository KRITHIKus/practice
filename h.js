function s(str){
let rstr=str.toLowerCase().replace(/\s+/g,"");

let cstr=""
for(let i=rstr.length-1;i>=0;i--){
    cstr+=rstr[i]
}

return cstr === rstr ? 'given string is pal':"not pai"
}
console.log(s("madam"))