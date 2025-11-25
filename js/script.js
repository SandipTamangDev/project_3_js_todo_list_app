// let a = " "
// let b = &nbsp

// let data = [];
const input = document.getElementById('input');
const taskList = document.getElementById('task-list');
const add = document.getElementById('add');



// function addTask() {
//     const inputText = input.value;

//     alert

//     const li = document.createElement("li");

//     const newContent = document.createTextNode("testing testing");

//     li.appendChild('newContent');

//     document.body.insertBefore(li, taskList);
// }



add.addEventListener('click', ()=> {
    const inputText = input.value;
    // alert(inputText);
    const anotherVariable = inputText;
    // alert(anotherVariable)
    if(anotherVariable === "") {
        return;
    }




    // issue zone
    const list = document.createElement("li");
    // list.textContent = anotherVariable;

    // list = anotherVariable;

    // li.textContent

    // data.push(anotherVariable);
    // console.log(data);



    // taskList.appendChild();
    // const list = 
    list.textContent = anotherVariable;

    const deleteTask = document.createElement("button");
    deleteTask.textContent = "Delete";
    list.appendChild(deleteTask);

    const completedTask = document.createElement("button");
    completedTask.textContent = "Completed";
    list.appendChild(completedTask);

    // li.appendChild(anotherVariable);
    // anotherVariable.innerHTML = anotherVariable.innerText.replaceAll(" ", "&nbsp;");
    console.log(anotherVariable);

    
    taskList.appendChild(list);
    // console.log(list)
    // console.log(list.textContent);

    // problem;

    input.value = "";
});

