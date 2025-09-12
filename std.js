
 let alldata =JSON.parse(localStorage.getItem("students")) || []
 let male=document.getElementById('male')
 let female=document.getElementById('female')
 let seacrh=document.getElementById('search')
 let click=document.getElementById('click')
 let add=document.getElementById('add')
 let tb1=document.getElementsByClassName('data')[0];
 let name1=document.getElementById('name')
 let age=document.getElementById('age')
 let course=document.getElementById('course')
 let marks=document.getElementById('marks')
 let gender=document.getElementById('gender')
 let edit = null
        let students=alldata.length > 0 ? alldata : [
              {id:1 ,
        name: "A",
        age: 23,
        course: "MCA",
        marks: 450,
        gender: "Male",
       
      },
      { id:2,
        name: "B",
        age: 24,
        course: "MBA",
        marks: 400,
        gender: "Female",
       
      },
     {id:3,
        name: "C",
        age: 22,
        course: "BCA",
        marks: 350,
        gender: "Male",
       
      },
    ];
    function dis(studentlist){
        let content=''
        let count=0
        studentlist.forEach((s)=>{
          count++
            content+=`
<tr >
    <td>${count}</td>
      <td>${s.name}</td>
          <td>${s.age}</td>
          <td>${s.gender}</td>
          <td>${s.marks}</td>
          <td>${s.course}</td>
          <td ><button class="btn btn-sm btn-info ms-2 update" data-id="${s.id}">🖊️</button>
          <button class="btn btn-sm btn-info ms-2 delete" data-id="${s.id}">❌</button></td>

         
         </tr>`
}
)

            tb1.innerHTML=content
 let updatebtn=document.querySelectorAll('.update')
             
 
  updatebtn.forEach(btn =>{
    btn.addEventListener('click',function(){
      let id= parseInt(this.getAttribute('data-id'))
      let student=students.find(s=>s.id===id)
      name1.value=student.name
      age.value=student.age 
       gender.value = student.gender;
      marks.value = student.marks;
      course.value = student.course;

      edit=id
      add.textContent="UPDATE STUDENT"
    })

 })

let deleteBtns = document.querySelectorAll('.delete');
deleteBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        let id = parseInt(this.getAttribute('data-id'));
        students = students.filter(s => s.id !== id);
        dis(students); 
    });
});

save()
            
    }
    
    function save(){
      localStorage.setItem("students",JSON.stringify(students))
    }

    dis(students);

    male.addEventListener('click',function(){
let mstd=students.filter(s=> s.gender==="Male")
  dis(mstd)
})


  female.addEventListener('click',function(){
let mstd=students.filter(s=> s.gender==="Female")
  dis(mstd)
})


click.addEventListener('click',function(){
    let text = seacrh.value;
    let sort=students.filter(s=>s.id.toString().includes(text))
    dis(sort)
   seacrh.value=""
   
})


add.addEventListener('click', () => {
  let sname = name1.value;
  let sage = age.value;
  let sgender = gender.value;
  let smarks = marks.value;
  let scourse = course.value;

  if (sname && sage && sgender && smarks && scourse) {
    if (edit !== null) {
      
      let student = students.find(s => s.id === edit);
      student.name = sname;
      student.age = parseInt(sage);
      student.gender = sgender;
      student.marks = parseInt(smarks);
      student.course = scourse;

      edit = null; 
      add.textContent = "Add Student"; 
    } else {
      
      let newstd = {
        id: students.length > 0 ? students[students.length - 1].id + 1 : 1,
        name: sname,
        age: parseInt(sage),
        gender: sgender,
        course: scourse,
        marks: parseInt(smarks)
      };
      students.push(newstd);
    }

    save();           
    dis(students);    

    
    name1.value = "";
    age.value = "";
    gender.value = "";
    marks.value = "";
    course.value = "";
  } else {
    alert("Please fill all fields.");
  }
});



