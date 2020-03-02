var addBtn = document.querySelector(".addBtn");
var task = document.querySelector(".inputField");
var tasksBlock = document.querySelector(".tasksTable");

addBtn.addEventListener("click", function () {
    createLine();
})

function createLine() {
    switch(true) {
        case (task).value.trim() === "": alert("Пусте поле");
            break;
        case (task).value.length > 50: alert("Максимальна довжина 50 символів!")
            break;
        default:
            var newText = document.createElement('span');
            var rBtn = document.createElement('button');
            var rowText = document.createElement('td');
            var rowBtn = document.createElement('td');
            var newTask = document.createElement('tr');
            newText.classList.add("text");
            rBtn.classList.add("rBtn");
            rowText.classList.add("field");
            newText.innerHTML = task.value;
            rBtn.innerHTML = "-";
            rowText.appendChild(newText);
            rowBtn.appendChild(rBtn);
            newTask.appendChild(rowText);
            newTask.appendChild(rowBtn);

            tasksBlock.appendChild(newTask);
            task.value = "";
            rBtn.addEventListener("click", removeTask);
            newText.addEventListener("click", throughLine); // line through event
    }
}
function removeTask(e) {
        e.currentTarget.parentNode.parentNode.remove();
    }

function throughLine(e) {
    e.currentTarget.style.textDecoration = "line-through";
}



