let data = [
  {
    id: 1,
    name: "Alice",
    department: "Engineering",
    salary: 90000,
    projects: ["A", "B"],
  },
  {
    id: 2,
    name: "Bob",
    department: "Engineering",
    salary: 80000,
    projects: ["B"],
  },
  {
    id: 3,
    name: "Charlie",
    department: "HR",
    salary: 60000,
    projects: ["C"],
  },
  {
    id: 4,
    name: "David",
    department: "Engineering",
    salary: 95000,
    projects: ["A", "C"],
  },
];

function filter(data) {
  let res = {};

  for (let i = 0; i < data.length; i++) {
  let emp=data[i]
   let dept=emp.department
    if(!res[dept]){
        res[dept]={
            totalEmp:0,
            projects:[]
        }
    }
    res[dept].totalEmp+=1

    for(let j=0;j<emp.projects.length;j++){
const project=emp.projects[j]
let exist=false;

for(let k=0;k<res[dept].projects.length;k++){
    if(res[dept].projects[k]===project){
        exist=true;
        break;
    }
}
if(!exist){
    res[dept].projects[[res[dept].projects.length]]=project
}
    }
  }
  return res
}
console.log(filter(data))