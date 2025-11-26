const taskInput = document.getElementById('input');
const todoList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add');
const completedList = document.getElementById('completed-task');

function themeSwitcher() {
    const themeSwitcherBtn = document.getElementById('theme-switcher');
    let theme = localStorage.getItem("theme");
    const getSystemTheme = () => window.matchMedia("(prefers-color-mode: dark)").match ? "Dark" : "Light"; 
    if (!theme) theme = getSystemTheme();

    themeSwitcherBtn.innerText = theme;

    document.documentElement.classList.add(theme);

    themeSwitcherBtn.addEventListener('click', ()=> {
        theme = theme === "Light" ? "Dark" : "Light";
        themeSwitcherBtn.innerText = theme;

        document.documentElement.classList.toggle("Light", theme === "Light");
        document.documentElement.classList.toggle("Dark", theme === "Dark");

        localStorage.setItem("theme", theme);
    });
}

function deleteTask(todoItem, buttonWrapper) {
    const deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.textContent = "Delete";
    todoItem.appendChild(deleteTaskBtn);
    deleteTaskBtn.addEventListener('click', ()=> {
        todoItem.remove();
    });
    buttonWrapper.appendChild(deleteTaskBtn);
}

function completedTask(todoItem, buttonWrapper) {
    const completedTaskBtn = document.createElement("button");
    completedTaskBtn.textContent = "Completed";
    todoItem.appendChild(completedTaskBtn);
    completedTaskBtn.addEventListener('click', () =>{
        completedList.appendChild(todoItem);
        buttonWrapper.remove();
    });
    
    buttonWrapper.appendChild(completedTaskBtn);
}

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === "") return;

    const todoItem = document.createElement("li");
    todoItem.textContent = taskText;

    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");

    deleteTask(todoItem, buttonWrapper);
    completedTask(todoItem, buttonWrapper);

    todoItem.appendChild(buttonWrapper);
    todoList.appendChild(todoItem);
    input.value = "";
}


addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e)=> {
    if (e.key === 'Enter') {
        addTask()
    }
});

themeSwitcher()




















// working model with eventListeners

// const input = document.getElementById('input');
// const todoList = document.getElementById('task-list');
// const add = document.getElementById('add');
// const completedList = document.getElementById('completed-task');
// let deleteTask;
// let completedTask;



// add.addEventListener('click', ()=> {
//     let taskInput = input.value;
//     const anotherVariable = taskInput.replace(/ /g,"&nbsp;");;
//     console.log(anotherVariable);
//     if(anotherVariable === "") {
//         return;
//     }

//     const list = document.createElement("li");
//     list.innerHTML = anotherVariable;
//     const wrapper = document.createElement("div");
//     wrapper.classList.add("wrapper")

//     deleteTask = document.createElement("button");
//     deleteTask.textContent = "Delete";
//     list.appendChild(deleteTask);
//     deleteTask.addEventListener('click', ()=> {
//         list.remove();
//     });

//     completedTask = document.createElement("button");
//     completedTask.textContent = "Completed";
//     list.appendChild(completedTask);

//     wrapper.appendChild(deleteTask);
//     wrapper.appendChild(completedTask);

//     completedTask.addEventListener('click', () =>{
//         completedList.appendChild(list);
//         wrapper.remove();
//     }); 

//     list.appendChild(wrapper);
// todoList.appendChild(list);
//     input.value = "";
// });









// Problems that i went thought to make the working model with eventListeners.

// let a = " "
// let b = &nbsp

// let data = [];
// const input = document.getElementById('input');
// const todoList = document.getElementById('task-list');
// const add = document.getElementById('add');
// let deleteTask;
// let completedTask;
// let deleteButton;
// let list;
// let wrapper = document.createElement("div");




// function addDeleteTask(list) {
//     const deleteButton = document.createElement("button");
//     // deleteTask.classList.add("deleteTask")
//     deleteButton.textContent = "Delete";
//     // alert(deleteButton);

//     deleteButton.addEventListener('click', ()=> {
//         list.remove();
//     });

//     list.appendChild(deleteButton);
// }


// function addTask() { 
//     const taskInput = input.value.trim();
//     const anotherVariable = taskInput;

//     if(anotherVariable === "") {
//         return;
//     }

//     list = document.createElement("li");
//     addDeleteButton(list)
//     list.textContent = anotherVariable;

//     todoList.appendChild(list);
//     input.value = "";
// };




// add.addEventListener('click', addTask);
// addDeleteTask();


// function addTask() {
//     const taskInput = input.value;

//     alert

//     const li = document.createElement("li");

//     const newContent = document.createTextNode("testing testing");

//     li.appendChild('newContent');

//     document.body.insertBefore(li, todoList);
// }

// deleteTask.addEventListener('click', () => {
//     remove.li
// });


// function addTask() { 
//     const taskInput = input.value.trim();
//     const anotherVariable = taskInput;
//     if(anotherVariable === "") {
//         return;
//     }
//     const list = document.createElement("li");
//     list.textContent = anotherVariable;
//     todoList.appendChild(list);
//     input.value = "";


//     let taskInput = input.value;
//     alert(taskInput);
//     const anotherVariable = taskInput.replace(/ /g,"&nbsp;");;
//     alert(anotherVariable)
//     const anotherVariable = taskInput;
//     console.log(anotherVariable);
//     if(anotherVariable === "") {
//         return;
//     }

//     issue zone
//     const list = document.createElement("li");

//     data.push(anotherVariable);
//     console.log(data);

//     list.innerHTML = anotherVariable;
//     list.textContent = anotherVariable;
//     let containerButton = document.createElement('div');
//     containerButton.classList.add("wrapper")



//     completedTask = document.createElement("button");
//     completedTask.classList.add("completedTask");
//     completedTask.textContent = "Completed";
//     containerButton.appendChild(completedTask);

//     list.appendChild(containerButton);

//     list.appendChild(anotherVariable);
//     anotherVariable.innerHTML = anotherVariable.innerText.replaceAll(" ", "&nbsp;");
//     console.log(anotherVariable);

    
//     todoList.appendChild(list);
//     console.log(list)
//     console.log(list.textContent);

//     input.value = "";
// };