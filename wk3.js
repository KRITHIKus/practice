function sort(arr){
    let res=[];
    let hashMap={}

    for(let i of arr){
        hashMap[i]=(hashMap[i]||0)+1
    }
   let items=[]
   for(let key in hashMap){
    items[items.length]=[Number(key),hashMap[key]]
   }
   for(let i =1;i<items.length;i++){
    let key=items[i]
    let j=i-1
    while(j>=0 && items[j][1]>key[1]){
        items[j+1]=items[j]
        j--
    }
    items[j+1]=key
   }
   for(let i=0;i<items.length;i++){
    res[res.length]=items[i][0]
   }
   return res
}

console.log(sort([1,1,2,2,2,3,3,3,3,4]))

