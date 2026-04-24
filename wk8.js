

function flatten(arr){
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            res[res.length]=arr[i]
        }else{
        let flattenArr=arr[i]
        for(let i=0;i<flattenArr.length;i++){
        res[res.length]=flattenArr[i]
        }
        }
    }
    return res

}
console.log(flatten([1,2,[3,4,[5]],6,[7]]))