function anagram(str1,str2){
    if(str1.length !== str2.length)return false

    let cleanStr1=str1.toLowerCase().replace(/\s+/g,"")
    let cleanStr2=str2.toLowerCase().replace(/\s+/g,"")     
    let hashMap={}

    for(let ch of cleanStr1){
        hashMap[ch]=(hashMap[ch]||0)+1
    }

    for(let ch of cleanStr2){
        if(!hashMap[ch]){
            return false
        }hashMap[ch]--
    }
    return true
}
console.log(anagram("madam","madaM"))
console.log(anagram("live","evil"))
console.log(anagram("four","five"))