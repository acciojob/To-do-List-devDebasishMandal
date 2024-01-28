let btn =document.getElementById("addTodoBtn");
let list=document.getElementById("todoList");
function addTask() {
  let input=document.getElementById("newTodoInput").value;
	let li=document.createElement("li");
	li.setAttribute("id","task");
	li.textContent=input;
	if(input!=""){
		list.appendChild(li);
		document.getElementById("newTodoInput").value="";
	}else{
		alert("Empty Task");
	}
	
}


