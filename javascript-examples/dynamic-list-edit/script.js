const list = document.getElementById("task-list");
const input = document.getElementById("task-input");
const button = document.getElementById("task-add");

button.addEventListener("click", () => {
    const task = input.value.trim();
    if (task) {
        const li = document.createElement("li");
        li.textContent = task;
        const deletebutton = document.createElement("button");
        deletebutton.textContent = "löschen";
        deletebutton.addEventListener("click", () => {
            list.removeChild(li)
        })
        li.appendChild(deletebutton)
        list.appendChild(li);
        input.value = "";

    }


})