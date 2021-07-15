
const taskInput = document.querySelector("#new-student"); //Add a new student.
const addButton = document.querySelector('#add-btn');
const addToDo = document.querySelector("#todo-tasks"); //ul to do list
const doneName = document.querySelector("#done-tasks");// ul completed to do list

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

    // Using.
    newTodo.appendChild(checkBox);
    newTodo.appendChild(label);
    newTodo.appendChild(deleteButton);
    return newTodo;
}

const addUser = () => {
    const newTodo = createNewToDoList(taskInput.value);
    if (taskInput.value != '') {
        addToDo.appendChild(newTodo);
        console.log(addToDo);
        events(newTodo, doneUser);
        taskInput.value = "";
    }
    else {
        alert('Enter Name of Student');
    }
}

//Delete User
const deleteUser = function () {
    const user = this.parentNode;
    const ul = user.parentNode;
    ul.removeChild(user);
}

//Mark task completed ✔
const doneUser = function () {
    const user = this.parentNode;
    doneName.appendChild(user);
    events(user, backTodo);
}

//Uncheck box in user ❌
const backTodo = function () {
    const user = this.parentNode;
    addToDo.appendChild(user);
    events(user, doneUser);
}

// checkBox and Delete
const events = function (tasknewTodo, checkBoxEvent) {
    const checkBox = tasknewTodo.querySelector("input[type=checkbox]");
    const deleteButton = tasknewTodo.querySelector("button.delete");
    deleteButton.onclick = deleteUser; // Call Delete Function
    checkBox.onchange = checkBoxEvent;
}

// Button Add
addButton.addEventListener("click", addUser);

document.addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        addUser();
    }
})
