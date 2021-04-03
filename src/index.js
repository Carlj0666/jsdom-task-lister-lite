
document.addEventListener("DOMContentLoaded", () => {
  const userForm = document.getElementById("create-task-form");
  userForm.addEventListener("submit", logSubmit);
})


function logSubmit(event) {
  event.preventDefault(); //stop post
  const newToDoDesc = document.getElementById("new-task-description");
  const toDo = document.createElement("li");
  toDo.innerText = newToDoDesc.value;
  const listElement = document.getElementById("tasks")
  // listElement.innerText = newToList;
  listElement.appendChild(toDo)
}
