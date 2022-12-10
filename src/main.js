import './style/style.scss';


// const pepparkaksDeg = {
//     content: 'Köp pepparkaksdeg',
//     deadline: 221212,
// }

// const ringUnni = {
//     content: 'Glöm inte ringa Unni!',
//     deadline: 221231,
// }
const taskList = ['pepparkaksDeg', 'ringUnni'];
// taskList.push(object);

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
    // localStorage.setItem('userTasks', JSON.stringify(userTasks));
    const input = {
      task: newTaskInput.value,
      deadline: deadLineInput.value,
      addedDate: new Date(),
      category: '1,2,3 eller 4',
      isComplete: false,
    }
    localStorage.setItem('userTasks', JSON.stringify(input));
    printHTML();
  }

  function getValues() {
    return localStorage.getItem('userTasks');
  }
  
  function printHTML() {
    console.log(JSON.parse(localStorage.getItem('userTasks')));
    const task = getValues();
    tasks.innerHTML = task; 
  }

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

// function printTaskList() {
//     tasks.innerHTML='';

//     for (let i = 0; i < taskList.length; i++) {
//         const taskName = taskList[i];
//         //const taskName = taskList[i].content + ' (' + taskList[i].deadline + ')';
//         const taskNode = document.createElement('li');
//         const taskTextNode = document.createTextNode(taskName);

//         //trash
//         const trashIcon = document.createElement('button');
//         trashIcon.setAttribute('data-name', taskName);
//         trashIcon.classList.add('material-symbols-outlined');
//         const trashIconText = document.createTextNode ('delete');
//         trashIcon.appendChild(trashIconText);

//         taskNode.appendChild(taskTextNode);
//         taskNode.appendChild(trashIcon);

//         tasks.appendChild(taskNode); 
//     }

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
// }

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