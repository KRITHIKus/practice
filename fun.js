
// function add (a=1)
//   {
//     if (a==1){
//         console.log("this correct");
        
//     }
//    return a ;
// }
// console.log(add()+1)

//arrary functions
// const a = [1,2,3]
// const e = [...a,21,22 ]
// const b = a.reduce((acc,val)=> acc+val,0)
// const c = a.filter((a => a % 2==0))
// const b1 = a.map((a => a * 2))
// console.log(b)
// console.log(c)
// console.log(b1)
// console.log(e);

// var a =10;
// var b =10;

// function add(){
 
//   console.log(a+b);
  
// }
// add()

// var factor = "malak"
// var fplayer = "dhoni"
// var fmovie = "leo"

// function fav(){
//   console.log("fav "+ factor);
//   console.log("fav "+ fplayer);
//   console.log("fav "+ fmovie);
  
// }
// fav();

// function add(a,b){
//  return a+b;
// }
// var sum=add(10,10)
// console.log(sum);

var maxSum = function(nums) {
    var count = nums.reduce((acc,val)=> acc+val,0)   
    console.log(count)
};

maxSum();