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

function addNewTask() {  
  if (newTaskInput.value.length === 0 || deadlineInput.value === '') {
    taskError.innerHTML = 'Fyll i Todo & deadline!';
    return;
  }
  
  else if (newTaskInput.value.length >= 2 && deadlineInput != '') {
    console.log(taskList.indexOf);

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
    addToLocalStorage(taskList);
    newTaskInput.value = '';
    deadlineInput.value = '';
  }
}

function printTaskList(taskList) {
  tasks.innerHTML = '';

  for (let i = 0; i < taskList.length; i++) {
    const checkBox = taskList[i].isComplete ? 'checked' : ''; //som en förenklad if else -sats, (condition to test ? value if true : value if false)
    tasks.innerHTML += `
        <li data-id="${i}"> <div class="licontainer">
        <input type="checkbox" ${checkBox} name="checkbox" class="checkbox"data-id="${i}">
        <span class="text" id="texttodo">${taskList[i].task}</span><br>
        <span class="text"> ${taskList[i].deadline}</span></div><div class="rightsection">
        <span class="material-symbols-outlined category">${taskList[i].category}</span>
        <button class="material-symbols-outlined" data-id="${i}">close</button>
        </div>
        </li>`;
  }
  showsortSection();

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
  if (event.target.checked) {
    console.log('The checkbox is checked');
    event.currentTarget.parentElement.classList.add('colorchange');
    sortByComplete();
  } else {
    console.log('The checkbox is not checked');
    event.currentTarget.parentElement.classList.remove('colorchange');
  }
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
  addToLocalStorage(taskList);
}

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
  printTaskList(taskList);
  addToLocalStorage(taskList);
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
  printTaskList(taskList);
  addToLocalStorage(taskList);
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
  printTaskList(taskList);
  addToLocalStorage(taskList);

}

// Sortera per inlagt datum
function sortByComplete() {
  console.log('clickt');
  console.log(taskList);
}

SortByDateBtn.addEventListener('click', sortByDate);
sortByNameBtn.addEventListener('click', sortByName);
sortByDeadlineBtn.addEventListener('click', sortByDeadline);


/**
 * LOCALSTORAGE FUNKTIONER 
 * SET & GET
 */

function addToLocalStorage(taskList) {
  localStorage.setItem('taskList', JSON.stringify(taskList));
  printTaskList(taskList);
}

// Funktion hämta det vi lagt till i localStorage,  konverterar tillbaka till lista & läggs i vår taskList -lista
function getFromLocalStorage() {
  const getStoredArray = localStorage.getItem('taskList');
  if (getStoredArray) {
    taskList = JSON.parse(getStoredArray);
    printTaskList(taskList);
  }
}

getFromLocalStorage();

//localStorage.clear(); rensa localstorage.

/************************************************************************************************************
 * ----------------------------------------  Eventlisteners -------------------------------------------------
 ************************************************************************************************************/

// eventlyssnare klick på submit aktivera funktion addNewTask
submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  addNewTask();
});