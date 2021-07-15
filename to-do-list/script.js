
const taskInput = document.getElementById("new-student");//Add a new task.
const addButton = document.getElementsByTagName("button")[0];//first button
const addToDo = document.getElementById("todo-tasks");//ul of #incomplete-tasks
const doneName = document.getElementById("done-tasks");//completed-tasks


//New task list item
const createNewToDoList = (dataToDo) => {

    const newTodo = document.createElement("li");
    const checkBox = document.createElement("input");
    const label = document.createElement("label");
    const deleteButton = document.createElement("button");
    label.innerText = dataToDo;

    //  Using To Do List : Style and Type
    checkBox.type = "checkbox";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    //and appending.
    newTodo.appendChild(checkBox);
    newTodo.appendChild(label);
    newTodo.appendChild(deleteButton);
    return newTodo;
}


const addUser = () => {
    const newTodo = createNewToDoList(taskInput.value);
    if (taskInput.value != '') {
        addToDo.appendChild(newTodo);
        bindTaskEvents(newTodo, doneUser);
        taskInput.value = "";
    }
    else {
        alert('Enter name of Student');
    }
}

//Delete 
const deleteUser = function () {
    const newTodo = this.parentNode;
    const ul = newTodo.parentNode;
    ul.removeChild(newTodo);
}

//Mark task completed
const doneUser = function () {
    const newTodo = this.parentNode;
    doneName.appendChild(newTodo);
    bindTaskEvents(newTodo, backTodo);
}

const backTodo = function () {
    const newTodo = this.parentNode;
    addToDo.appendChild(newTodo);
    bindTaskEvents(newTodo, doneUser);
}

const bindTaskEvents = function (tasknewTodo, checkBoxEventHandler) {
    const checkBox = tasknewTodo.querySelector("input[type=checkbox]");
    const deleteButton = tasknewTodo.querySelector("button.delete");
    deleteButton.onclick = deleteUser;
    checkBox.onchange = checkBoxEventHandler;
}
addButton.addEventListener("click", addUser);
document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        addUser();
    }
})
