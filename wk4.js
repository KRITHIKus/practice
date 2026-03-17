const users = [
  { name: "Ashok", age: 22 },
  { name: "Ravi", age: 25 },
  { name: "Anil", age: 22 },
];

function grp(data) {
  let res = {};

  for (let i = 0; i < data.length; i++) {
    let age = data[i].age;
    let users = data[i];

    if (!res[age]) {
      res[age] = [];
    }
    res[age][res[age].length] = { name: users.name };
  }
  return res;
}

console.log(grp(users));
