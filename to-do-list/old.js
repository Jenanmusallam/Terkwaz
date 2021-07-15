const toDoBtn = document.querySelector('#add-btn');
const inputToDo = document.querySelector('#new-student');
const todoList = document.getElementById("todo-tasks");
const todoArray = [{}];

const createNewToDoList = function (dataToDo) {

  // Create HTML Tag li / input /button / label 
  const newTodo = document.createElement("li");

  const checkbox = document.createElement("input");

  const label = document.createElement("label");

  const deleteButton = document.createElement("button");

  label.innerHTML = dataToDo;

  //  Using To Do List : Style and Type
  checkbox.type = 'checkbox';
  newTodo.className = 'new-list';
  deleteButton.className = 'delete';
  deleteButton.innerHTML = "Delete";

  // Using 
  newTodo.appendChild(checkbox);
  newTodo.appendChild(label);
  newTodo.appendChild(deleteButton);

  return newTodo;
}

const add = () => {

  const listItem = createNewToDoList(inputToDo.value);

  //Append listItem to incompleteTaskHolder
  todoList.appendChild(listItem);
  //select ListItems children
  var checkBox = listItem.querySelector("input[type=checkbox]");
  var deleteButton = listItem.querySelector("button.delete");

  deleteButton.onclick = deleteTask;
  checkBox.onchange = taskCompleted;

  taskInput.value = "";


  // if (inputToDo != '') {
  //   todoList.appendChild(listItem);

  //   Object.assign(todoArray, { id: numberId, done: 'false', value: inputToDo });
  //   console.log(todoArray)

  //   const node = document.createTextNode(todoArray.value); todoList.appendChild(newTodo);
  //   label.appendChild(node);
  //   const numberId = Math.floor(Math.random() * 100)

  //   inputToDo.value = '';
  // }
  // else {
  //   alert('Enter name of Student');
  // }
}

const todoListTest = [
  {
    value: 'todo',
    done: false,
    id: 5,
  },
  {
    value: 'jenan',
    done: false,
    id: 2,
  }
]

id = 2;
const element = todoListTest.find((elem) => { // find => {} | undefined
  return elem.id === id;
});

console.log('elem: ', element);


const todoListChecked = [
  {
    value: 'todo',
    done: true,
    id: new Date(),
  }
]

toDoBtn.addEventListener("click", add);
document.addEventListener("keydown", (event) => {
  if (event.key === 'Enter') {
    add();
  }
})
document.querySelector('.delete').addEventListener("click",
  (id) => { // find => {} | undefined

    console.log("welcome", todoArray.elem.id === id);
  }
)
