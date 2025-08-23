function pal(str){
    let len = str.length
    for (let i = 0;i < len / 2; i++){
    if(str[i] !== str[len - 1 -i]){
        return false
    }
    }
    return true
}
console.log(pal([1,2,1]))
console.log(pal(121))