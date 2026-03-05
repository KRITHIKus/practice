let data= [
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


function userD(info){
    let newUser=null
    let oldestUser=null
    for(let i =0;i<info.length;i++){
        if(newUser ===null ||   new Date(info[i].createdAt)> new Date(newUser.createdAt)){
           newUser= info[i]
        }
        if(oldestUser ===null ||   new Date(info[i].createdAt)< new Date(oldestUser.createdAt)){
           oldestUser= info[i]
        }
    }
    return {oldestUser,newUser}
}

//console.log(userD(data))


function userName(info){
    let firstName=[ ]
    let secondName=[]
 
    for(let i=0;i<info.length;i++){
        let name=info[i].name
        if(name!==""){
            let nameParts= name.split(" ")
           if(nameParts.length>1){
        firstName[firstName.length]= nameParts[0]
            secondName[secondName.length]=nameParts[1]

           } else{
            firstName[firstName.length]=nameParts[0]
            secondName[secondName.length]=""
           }
        }
    }
    return{firstName,secondName}
}
console.log(userName(data))


let value=[0,1,0,2,3,0,4,0];

function rem(arr){
    let writeIndex=0
    for(let i =0;i<arr.length;i++){
      if(arr[i]!==0){
        arr[writeIndex]=arr[i];
        writeIndex++
      }
    }
    while(writeIndex<arr.length){
        arr[writeIndex]=0
        writeIndex++
    }
    return arr
}
console.log(rem(value))