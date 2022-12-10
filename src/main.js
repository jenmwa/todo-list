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
            addedDate: 'inlagt datum',
            category: '1,2,3 eller 4',
            isComplete: false,
          };
        taskList.push(input);
    //localStorage.setItem('userTasks', JSON.stringify(input));
        printTaskList();
        console.log(taskList);
  }
}
console.log(taskList);


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

    for (let i = 0; i < taskList.length; i++) {
        const taskName = taskList[i];
        //const taskName = taskList[i].content + ' (' + taskList[i].deadline + ')';
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

//     const taskItems = Array.from(document.querySelectorAll('li button'));
//     taskItems.forEach((item) => {
//         item.addEventListener('click', removeTask)
//     });
// }
// /**
//  * Remove tasks taskList
//  */
// function removeTask(e) {
//     const index = taskList.indexOf(e.target.dataset.name); 
//     if (index > -1) {
//         taskList.splice(index, 1);
//         printTaskList();
//     }
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