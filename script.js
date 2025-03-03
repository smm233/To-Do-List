const inputBox = document.getElementById("input-box");
const taskContainer = document.getElementById("task-container");
function addTask() {
    if(inputBox.value === '') {
        alert("You must type in a task! >:(");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        taskContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveTasks();
}

taskContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveTasks();
    } else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveTasks();
    }
}, false);

function saveTasks(){
    localStorage.setItem("tasks", taskContainer.innerHTML);
}

function showTasks(){
    taskContainer.innerHTML = localStorage.getItem("tasks");
}
showTasks();