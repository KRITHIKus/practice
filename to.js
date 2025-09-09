
let arr = JSON.parse(localStorage.getItem("tasks")) ||[];


let ip=document.getElementById("taskInput");
let btn=document.getElementById("addTaskBtn");
let msg=document.getElementById("msg");


//read
function tasklist(){
    let list = document.getElementById('taskList');
    
    list.innerHTML = ""; 
    if(arr.length===0){
    msg.textContent="Please Add Task"
}
else{
    msg.textContent=""
}
    let cont=''
let num =0;
   arr.forEach((item,index) => {
    num++;
    cont+=
    `<li class="list-group-item  lists" >${num}. ${item} <button cla
    ss="btn btn-danger  btn-sm  float-end" onclick=del(${index})>❌</butt
    on>
    <button class="btn btn-info  btn-sm  float-end" onclick=updatelist(${index})>🖊️</butt
    on></li> `
   })
//    list.insertAdjacentHTML('beforeend', cont
//    )


   list.innerHTML=cont;
   let l1=document.querySelectorAll('.lists')
l1.forEach((task,i)=>{
if((i+1)%2==0){
task.classList.add('bg')
}
else{
    task.classList.remove('bg')
}
})
}


function save(){
    localStorage.setItem("tasks",JSON.stringify(arr))
}
tasklist();
//add
btn.addEventListener("click", function(){
    if(ip.value.trim() !== ''){
        arr.push(ip.value)
        tasklist();
        save();
        ip.value="";
    
    }
    else{
alert('Please enter a task')
    }
})

//delete
 function del(index){
    arr.splice(index,1)
tasklist();
save();
}

//update
function updatelist(index){
ip.value=arr[index];
arr.splice(index,1)
tasklist();
}

