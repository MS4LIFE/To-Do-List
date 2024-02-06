const newToDoInput = document.getElementById('newToDoInput');
const addToDoBtn = document.getElementById('addToDoBtn');
const todoList = document.getElementById('todoList');


let counter = 0;
addToDoBtn.addEventListener("click", () => {
    const newTodoText = newToDoInput.value;
    if (newTodoText !== '') {
        const newTodoItem = document.createElement("li");
        counter++;
        // console.log(newTodoItem);
        newTodoItem.innerHTML = `<div><span>(${counter}).</span> ${newTodoText}<div/>`;
        newTodoItem.style.fontFamily = `'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans - serif`
        newTodoItem.style.fontSize = "20px"
        const deleteBtn = document.createElement("button")
        deleteBtn.innerText = "X"
        // console.log(deleteBtn);
        deleteBtn.classList.add("delete-todo-btn");
        deleteBtn.addEventListener("click", () => {
            newTodoItem.remove();

        });

        newTodoItem.appendChild(deleteBtn);
        todoList.appendChild(newTodoItem);
        newToDoInput.value = "";

        todoList.style.listStyleType = "none";
        todoList.style.padding = "0";
        todoList.style.margin = "25px 36px 20px 25px;";
        newTodoItem.style.backgroundColor = "#f2f2f2"
        newTodoItem.style.display = "flex"
        newTodoItem.style.justifyContent = "space-between"
        newTodoItem.style.padding = "10px";
        newTodoItem.style.margin = "20px"
        newTodoItem.style.borderRadius = "10px"
        deleteBtn.style.backgroundColor = "red"
        deleteBtn.style.padding = "5px 15px"
        deleteBtn.style.borderRadius = "5px"
        deleteBtn.style.color = "white"

    }
})