function fib(n){
    let n1=0;
    let n2=1;
    let arr=[n1,n2]
    for(let i =0;i<n;i++){
        let n3=n1+n2;
        arr.push(n3)
        n1=n2;
        n2=n3;

    }
    return arr
}
console.log(fib(10))

function per(n){
    let s=Math.floor(Math.sqrt(n))
    return s*s === n
}
function isfbon(x){
    return per(5*x*x+4)||per(5*x*x-4)
}
console.log(isfbon(89))


function fact(n){
    let res=1;
    let ns=0
    for(let i=1;i<=n;i++){
        res*=i
       ns+=res
       ns+=" "
    }
   return {ns,res}
}
console.log(fact(5))

function ispali(n){
    let lastdigit;
    let rev=0
    let org =n
    while (n>0){
        lastdigit=n%10
        rev=rev*10+lastdigit
        n=Math.floor(n/10)
    }
    let res=org===n
    return {res,lastdigit,rev}
}
console.log(ispali(1231))

let data=[
  {
    "id": 101,
    "name": "John Doe",
    "email": "john.doe@example.com",
    "isActive": true,
    "roles": ["admin", "editor"],
    "profile": {
      "age": 30,
      "country": "USA"
    },
    "createdAt": "2026-01-28T10:15:30Z"
  },
  {
    "id": 102,
    "name": "Jane Smith",
    "email": "jane.smith@example.com",
    "isActive": true,
    "roles": ["editor"],
    "profile": {
      "age": 28,
      "country": "Canada"
    },
    "createdAt": "2026-01-27T09:05:10Z"
  },
  {
    "id": 103,
    "name": "Michael Brown",
    "email": "michael.brown@example.com",
    "isActive": false,
    "roles": ["viewer"],
    "profile": {
      "age": 35,
      "country": "UK"
    },
    "createdAt": "2026-01-26T14:45:00Z"
  },
  {
    "id": 104,
    "name": "Emily Davis",
    "email": "emily.davis@example.com",
    "isActive": true,
    "roles": ["admin"],
    "profile": {
      "age": 32,
      "country": "Australia"
    },
    "createdAt": "2026-01-25T11:20:40Z"
  },
  {
    "id": 105,
    "name": "Carlos Martinez",
    "email": "carlos.martinez@example.com",
    "isActive": true,
    "roles": ["editor", "viewer"],
    "profile": {
      "age": 29,
      "country": "Spain"
    },
    "createdAt": "2026-01-24T08:10:55Z"
  }
]


// data.forEach(n=>{
//     console.log(n.name)
// })

//let admin=data.map(u=>u.roles=="admin"?console.log(u): null)

//console.log(data.find(n=>n.id==105))

let editor=[]
for(let i=0;i<data.length;i++){
    if(data[i].profile.age<=30){
        editor[editor.length]=data[i]
    }
}
console.log(editor)