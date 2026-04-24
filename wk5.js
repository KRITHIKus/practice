function sort(arr){
    let res=[];
    let k=3;

    for(let i=0; i<=arr.length-k;i++){
        let max=arr[i]

        for(let j=i;j<i+k;j++){
            if(arr[j] > max){
                max=arr[j]
            }
        }
        res[res.length]=max
    }
    return res
}



function sliding(arr,k){
    let deque=[];
    let res=[]

    for(let i=0;i<arr.length;i++){
        if(deque.length && deque[0]<=i-k){
            deque.shift()
        }
        while(deque.length && arr[deque[deque.length-1]] < arr[i]){
            deque.pop()
        }
        deque[deque.length]=i
    
    if(i>= k-1){
        res[res.length]=arr[deque[0]]
    }
}
    return res
}

let arr=[1,3,-1,4,5,-6,-9,7]

console.time("Brute Force")
console.log(sort(arr))
console.timeEnd("Brute Force")

console.time("Sliding Window (Deque)")
console.log(sliding(arr,3))
console.timeEnd("Sliding Window (Deque)")


function cube(a,b){
    let sum=0;

    for(let i =a;i<=b;i++){
        let n=0
        n=i**3
        sum+=n
    }
    return sum
}
console.log(cube(1,3))