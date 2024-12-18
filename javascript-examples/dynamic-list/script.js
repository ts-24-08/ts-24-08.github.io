const list = document.getElementById("task-list");
const input = document.getElementById("task-input");
const button = document.getElementById("task-add");

button.addEventListener("click", ()=>{
    const task = input.value.trim();
    if(task) {
        const li = document.createElement("li");
        li.textContent = task;
        list.appendChild(li);
        input.value = "";

    }

})