import './style/style.scss';



const pepparkaksDeg = {
    content: 'Köp pepparkaksdeg',
    deadline: 0,
}

const ringUnni = {
    content: 'Glöm inte ringa Unni!',
    deadline: 0,
}
const taskList = [pepparkaksDeg, ringUnni];
// taskList.push(object);

const tasks = document.querySelector('.tasks'); // the <ul> element

printTaskList()

// Todays Date
const todaysDate = new Date();
const dateField = document.querySelector('#todaysDate');
dateField.innerHTML = todaysDate.toLocaleDateString();

const submitBtn = document.querySelector('#submit'); //submitBtn
submitBtn.addEventListener('click', addNewTask);

const newTaskInput = document.querySelector('#inputTaskField');

function addNewTask(e) {
    e.preventDefault();
    if (newTaskInput.value.length === 0) {
        return;
    }
    const clickedTask = newTaskInput.value;
    const index = taskList.findIndex(singleTaskObject => singleTaskObject.content === clickedTask); 
  

    if (index === -1) {
        taskList.push({
            content: clickedTask,
            deadline: 1,
        });
        printTaskList();
    } else {
       taskList[index].deadline +=1;
       printTaskList();
    }
}

function printTaskList() {
    tasks.innerHTML='';

    for (let i = 0; i < taskList.length; i++) {

        const taskName = `${taskList[i].content} (${taskList[i].deadline})`;

        const taskNode = document.createElement('li');
        const taskTextNode = document.createTextNode(taskName);

        //trash
        const trashIcon = document.createElement('button');
        trashIcon.setAttribute('data-name', taskName);
        trashIcon.classList.add('material-symbols-outlined');
        const trashIconText = document.createTextNode ('delete');
        trashIcon.appendChild(trashIconText);

        taskNode.appendChild(taskTextNode);
        taskNode.appendChild(trashIcon);
        tasks.appendChild(taskNode); 
    }

    const taskItems = Array.from(document.querySelectorAll('li button'));
    taskItems.forEach((item) => {
        item.addEventListener('click', removeTask)
    });
}
/**
 * Remove tasks taskList
 */
function removeTask(e) {
    const clickedTask = e.target.dataset.name;
    const index = taskList.findIndex(singleTaskObject => singleTaskObject.content === clickedTask); 
    if (index > -1) {
        taskList.splice(index, 1);
        printTaskList();
    }
}

// const userTask = {
//     task: 'input value',
//     date: 'dagens datum',
//     deadline: 'deadline',
//     category: 'kategori',
//   };

//   const pizzas = ['Margarita', 'four Cheese', 'hawaii'];
//   localStorage.setItem('pizzas', pizzas);

//   localStorage.setItem('userTask', JSON.stringify(userTask));

//   console.log(JSON.parse(localStorage.getItem('userTask')).task);
//   console.log(localStorage.getItem('pizzas').split(','));

  //localStorage.clear(); rensa localstorage.