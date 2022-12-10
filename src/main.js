import './style/style.scss';

const taskList = [];
// taskList.push(input);

const tasks = document.querySelector('.tasks'); // the <ul> element

//printTaskList()

// Todays Date
const todaysDate = new Date();
const dateField = document.querySelector('#todaysDate');
dateField.innerHTML = todaysDate.toLocaleDateString();

const submitBtn = document.querySelector('#submit'); //submitBtn
submitBtn.addEventListener('click', /*addNewTask*/ storeValues);

const newTaskInput = document.querySelector('#inputTaskField');
const deadLineInput = document.querySelector('#deadlineInput');

function storeValues(e) {
    e.preventDefault();
    if (newTaskInput.value.length === 0) {
        return;
    }
    if (taskList.indexOf(newTaskInput.value) === -1) {
        const input = {
            task: newTaskInput.value,
            deadline: deadLineInput.value,
            addedDate: new Date(),
            category: ' ！, 📚, 🛒, ❤️',
            isComplete: false,
          };
        taskList.push(input);
        localStorage.setItem('taskList', JSON.stringify(taskList)); // allt strängar
        printTaskList();
  }
}
console.log(taskList);
// console.log(JSON.parse(localStorage.getItem('taskList'))); //vart?



// function addNewTask(e) {
//     e.preventDefault();
//     if (newTaskInput.value.length === 0) {
//       return;
//     }
//     if (taskList.indexOf(newTaskInput.value) === -1) {
//       taskList.push(newTaskInput.value);
//       printTaskList();
//       console.log(taskList);
//     }
// }

function printTaskList() {
    tasks.innerHTML='';
    //localStorage.getItem('taskList').split(',');

    for (let i = 0; i < taskList.length; i++) {
        tasks.innerHTML += `
        <li>
        <input type="checkbox" class="checkbox">
        ${taskList[i].task}<br>
        ${taskList[i].deadline}
        ${taskList[i].category}
        <button class="material-symbols-outlined" data-id="${i}">close</button>
        </li>`;
    }

    const taskItems = Array.from(document.querySelectorAll('.tasks button'));
    taskItems.forEach((item) => {
        item.addEventListener('click', removeTask)
    });
}
/**
 * Remove tasks taskList
 */
function removeTask(e) {
    const index = e.currentTarget.dataset.id; 
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