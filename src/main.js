import './style/style.scss';
/************************************************************************************************************
 * -------------------------------------------  Variables  -------------------------------------------------
 ************************************************************************************************************/

let taskList = [];

const tasks = document.querySelector('.tasks'); 

const newTaskInput = document.querySelector('#inputTaskField'); 
const deadlineInput = document.querySelector('#deadlineInput'); 
const submitBtn = document.querySelector('#submit'); 
const sortSection = document.querySelector('#sortSection'); 

const taskError = document.querySelector('#taskError');

const todaysDate = new Date();
const dateField = document.querySelector('#todaysDate');
dateField.innerHTML = todaysDate.toLocaleDateString();

/************************************************************************************************************
 * -------------------------------------------  Functions  -------------------------------------------------
 ************************************************************************************************************/

function getFromLocalStorage() {
  const getStoredArray = localStorage.getItem('taskList');
  
  if (getStoredArray) {
    taskList = JSON.parse(getStoredArray);
    printTaskList(taskList);
  }
}

function addToLocalStorage() {
  localStorage.setItem("taskList", JSON.stringify(taskList));
  console.table(taskList);
}

function addNewTask(e) { 
  e.preventDefault(); 
  if (newTaskInput.value.length === 0 || deadlineInput.value === '') {
    taskError.innerHTML = 'Fyll i Todo & deadline!';
    return;
  }
  
  if (newTaskInput.value.length >= 2 && deadlineInput != '') {
    taskError.innerHTML = '';
    const selectedCategory = document.querySelector("input[name='category']:checked").value;

    let todoInput = {
      task: newTaskInput.value,
      deadline: deadlineInput.value,
      addedDate: todaysDate.toString(),
      category: selectedCategory,
      isComplete: false, // avbockade tasks ska längst ner i listan men fortfarande synas i listan
    };

    taskList.push(todoInput);
    printTaskList(taskList);
    newTaskInput.value = '';
    deadlineInput.value = '';
  }
}

function printTaskList(taskList) {
  localStorage.setItem("taskList", JSON.stringify(taskList));
  tasks.innerHTML = '';

  for (let i = 0; i < taskList.length; i++) {
    const checkBox = taskList[i].isComplete ? 'todochecked' : ''; //som en förenklad if else -sats, (condition to test ? value if true : value if false)
    const checked = taskList[i].isComplete ? 'checked' : '';

    // const checkBox;
    //   if (taskList[i].isComplete) {
    //     checkBox = 'todochecked';
    //   } else {
    //     checkBox = '';
    //   };

    tasks.innerHTML += `
        <li data-id="${i}"> <div class="licontainer">
        <label for= "${taskList[i].task}">
        <input type="checkbox" name="checkbox" class="checkbox" ${checked} data-id="${i}">
        <span class="text ${checkBox}" id="texttodo">${taskList[i].task}</span><br>
        <span class="text ${checkBox}"> ${taskList[i].deadline}</span></div><div class="rightsection">
        <span class="material-symbols-outlined category">${taskList[i].category}</span>
        <button class="material-symbols-outlined" data-id="${i}">close</button>
        </div>
        </li>`;
  }
  showsortSection();
  todoEventListeners();
}
 
function todoEventListeners() {
  const taskItems = Array.from(document.querySelectorAll('.tasks button'));
  taskItems.forEach(item => {
    item.addEventListener('click', removeTask);
  });

  const checkBtn = Array.from(document.querySelectorAll('.tasks input'));
  checkBtn.forEach(check => {
    check.addEventListener('change', todoChecked);
  });  
}

//funktion när todo är checked, gråa ut text
function todoChecked(event) {
  const todo = taskList[event.currentTarget.dataset.id];

  if (event.target.checked) {
    todo.isComplete = true;
    console.log('The checkbox is checked');
    event.currentTarget.parentElement.classList.add('todochecked');
    event.target.classList.toggle('checked');
    
    //add class to colormark checkboc name if checked 
    console.log(event.currentTarget)
    console.log(todo);
   
  } else {
    todo.isComplete = false;
    console.log('The checkbox is not checked');
    event.currentTarget.parentElement.classList.remove('todochecked');
    event.target.classList.toggle('checked');
  }
  addToLocalStorage();
  sortByComplete();
}

// Sortera per isComplete sant/falskt
function sortByComplete() {
  const taskList = taskList.sort((a, b) => {
    if (a.isComplete < b.isComplete) {
      return -1;
    }
    if (a.isComplete > b.isComplete) {
      return 1;
    }
    return 0;
  });
  addToLocalStorage()
  
//   //console.log(taskList.findIndex(x => x.isComplete === true)) //if true = -1, if false = 0
//   if ( isComplete = !isComplete) {
//     taskList.sort((a, b) => a.isComplete.localeCompare(b.isComplete));

//     //console.log('still false');
//   }
//   else if (isComplete) {
//   //console.log('true');
//  }
  console.log(taskList);
}

function showsortSection() { 
  if (taskList.length <= 1) {
    sortSection.classList.remove('open');
  }
  if (taskList.length >= 2) {
    sortSection.classList.add('open');
  }
}

function removeTask(e) {
  const index = e.currentTarget.dataset.id;
  if (index > -1) {
    taskList.splice(index, 1);
    printTaskList(taskList);
  }
}

/************************************************************************************************************
 * ------------------------------------  Sort Section ---------------------------------------------
 ************************************************************************************************************/
/**
 * sorteraSektion OBS NÄR ALLT FÖR G ÄR KLART - REFAKTORERA KODEN! 
 * se Aritmetik v3 14 modul
 */

let isDateSort = true;
let isNameSort = true;
let isDeadlineSort = true;

const SortByDateBtn = document.querySelector('#sortByDateBtn');
const sortByNameBtn = document.querySelector('#sortByNameBtn');
const sortByDeadlineBtn = document.querySelector('#sortByDeadlineBtn');

function sortByDate(eve) {
  console.log('clicketi');
  console.log(taskList);
  eve.preventDefault();
  if (isDateSort) {
    taskList.sort((a, b) => a.addedDate.localeCompare(b.addedDate));
    isDateSort = false;
  } else if (isDateSort === false) {
    taskList.sort((a, b) => b.addedDate.localeCompare(a.addedDate));
    isDateSort = true;
  }
  addToLocalStorage()
}

function sortByName(ev) {
  console.log(taskList);
  ev.preventDefault();
  if (isNameSort) {
    taskList.sort((a, b) => a.task.localeCompare(b.task));
    isNameSort = false;
  } else if (isNameSort === false) {
    taskList.sort((a, b) => b.task.localeCompare(a.task));
    isNameSort = true;
  }
  addToLocalStorage()
}

function sortByDeadline(event) {
  console.log('clicketiclick');
  console.log(taskList);
  event.preventDefault();
  if (isDeadlineSort) {
    taskList.sort((a, b) => b.deadline.localeCompare(a.deadline));
    isDeadlineSort = false;
  } else if (isDeadlineSort === false) {
    taskList.sort((a, b) => a.deadline.localeCompare(b.deadline));
    isDeadlineSort = true;
  }
  addToLocalStorage()
}

SortByDateBtn.addEventListener('click', sortByDate);
sortByNameBtn.addEventListener('click', sortByName);
sortByDeadlineBtn.addEventListener('click', sortByDeadline);


//localStorage.clear(); rensa localstorage.

/************************************************************************************************************
 * ------------------------------------  Light/DarkMode Toggle ---------------------------------------------
 ************************************************************************************************************/

const colorTheme = document.querySelector("body");

const colorModeIcon = document.querySelector(".light-mode-icon");

colorModeIcon.addEventListener('click', () => {
  colorTheme.classList.toggle('change')?
  colorModeIcon.textContent = "dark_mode": colorModeIcon.textContent = "light_mode";
});

/************************************************************************************************************
 * ----------------------------------------  Eventlisteners -------------------------------------------------
 ************************************************************************************************************/


// eventlyssnare klick på submit aktivera funktion addNewTask
submitBtn.addEventListener('click', addNewTask);

/************************************************************************************************************
 * ------------------------------------  get from local Storage ---------------------------------------------
 ************************************************************************************************************/

getFromLocalStorage();