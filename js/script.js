const input = document.getElementById('input');
const taskList = document.getElementById('task-list');
const add = document.getElementById('add');
const completedList = document.getElementById('completed-task');
let deleteTask;
let completedTask;



add.addEventListener('click', ()=> {
    let inputText = input.value;
    const anotherVariable = inputText.replace(/ /g,"&nbsp;");;
    console.log(anotherVariable);
    if(anotherVariable === "") {
        return;
    }

    const list = document.createElement("li");
    list.innerHTML = anotherVariable;
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper")

    deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    list.appendChild(deleteTask);
    deleteTask.addEventListener('click', ()=> {
        list.remove();
    });

    completedTask = document.createElement("button");
    completedTask.textContent = "Completed";
    list.appendChild(completedTask);

    wrapper.appendChild(deleteTask);
    wrapper.appendChild(completedTask);

    completedTask.addEventListener('click', () =>{
        completedList.appendChild(list);
        wrapper.remove();
    }); 

    list.appendChild(wrapper);
    taskList.appendChild(list);
    input.value = "";
});











// let a = " "
// let b = &nbsp

// let data = [];
// const input = document.getElementById('input');
// const taskList = document.getElementById('task-list');
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
//     const inputText = input.value.trim();
//     const anotherVariable = inputText;

//     if(anotherVariable === "") {
//         return;
//     }

//     list = document.createElement("li");
//     addDeleteButton(list)
//     list.textContent = anotherVariable;

//     taskList.appendChild(list);
//     input.value = "";
// };




// add.addEventListener('click', addTask);
// addDeleteTask();


// function addTask() {
//     const inputText = input.value;

//     alert

//     const li = document.createElement("li");

//     const newContent = document.createTextNode("testing testing");

//     li.appendChild('newContent');

//     document.body.insertBefore(li, taskList);
// }

// deleteTask.addEventListener('click', () => {
//     remove.li
// });


// function addTask() { 
//     const inputText = input.value.trim();
//     const anotherVariable = inputText;
//     if(anotherVariable === "") {
//         return;
//     }
//     const list = document.createElement("li");
//     list.textContent = anotherVariable;
//     taskList.appendChild(list);
//     input.value = "";


//     let inputText = input.value;
//     alert(inputText);
//     const anotherVariable = inputText.replace(/ /g,"&nbsp;");;
//     alert(anotherVariable)
//     const anotherVariable = inputText;
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

    
//     taskList.appendChild(list);
//     console.log(list)
//     console.log(list.textContent);

//     input.value = "";
// };