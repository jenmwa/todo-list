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
  console.log(localStorage.getItem('taskList'));
  const getStoredArray = localStorage.getItem('taskList');
  
  if (getStoredArray) {
    taskList = JSON.parse(getStoredArray);
    printTaskList(taskList);
  }
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
      addedDate: new Date().toString(),
      category: selectedCategory,
      isComplete: false,
    };

    taskList.push(todoInput);
    printTaskList(taskList);
    newTaskInput.value = '';
    deadlineInput.value = '';
  }
}

submitBtn.addEventListener('click', addNewTask);

function printTaskList(taskList) {
  localStorage.setItem("taskList", JSON.stringify(taskList));
  tasks.innerHTML = '';

  for (let i = 0; i < taskList.length; i++) {
    const checkBox = taskList[i].isComplete ? 'todochecked' : ''; 
    const toggled = taskList[i].isComplete ? 'toggled' : '';
    const checked = taskList[i].isComplete ? 'checked' : '';

    // const checkBox;
    //   if (taskList[i].isComplete) {
    //     checkBox = 'todochecked';
    //   } else {
    //     checkBox = '';
    //   };

    tasks.innerHTML += `
        <li data-id="${i}">
          <div class="licontainer">
            <label for= "${taskList[i].task}">
              <input type="checkbox" name="checkbox" class="checkbox ${toggled}"  ${checked} data-id="${i}">
              <span class="text ${checkBox}" id="texttodo">${taskList[i].task}</span><br>
              <span class="text ${checkBox}"> ${taskList[i].deadline}</span>
            </label>
          </div>
          <div class="rightsection">
            <span class="material-symbols-outlined category">${taskList[i].category}</span>
            <button class="material-symbols-outlined" aria-label="ta bort todo" data-id="${i}">close</button>
          </div>
        </li>`;

  // IN med OM deadline har passerat
  // IN med OM deadline är inom 5 dagar
        
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

function todoChecked(event) {
  const todo = taskList[event.currentTarget.dataset.id];

  if (event.target.checked) {
    todo.isComplete = true;
    event.currentTarget.nextElementSibling.classList.add('todochecked');
    event.target.classList.add('toggled');
    event.target.classList.add('checked');
  } else {
    todo.isComplete = false;
    event.currentTarget.nextElementSibling.classList.remove('todochecked');
    event.target.classList.remove('toggled');
    event.target.classList.remove('checked');
  }
  localStorage.setItem("taskList", JSON.stringify(taskList));
  sortByComplete();
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

let isNameSort = true;
let isDeadlineSort = true;

const SortByDateBtn = document.querySelector('#sortByDateBtn');
const sortByNameBtn = document.querySelector('#sortByNameBtn');
const sortByDeadlineBtn = document.querySelector('#sortByDeadlineBtn');

function sortByDate(e) {
e.preventDefault();
document.querySelector('#sortByText').innerHTML = 'inlagt datum';
const sorted = taskList.sort((a, b) => {
  if (a.addedDate < b.addedDate) {
    return -1;

  }
  if (a.addedDate > b.addedDate) {
    return 1;
  }
  return 0;
});

localStorage.setItem("taskList", JSON.stringify(taskList));
printTaskList(taskList);
}

function sortByName(ev) {
  ev.preventDefault();
  document.querySelector('#sortByText').innerHTML = 'bokstavsordning';
  if (isNameSort) {
    taskList.sort((a, b) => a.task.localeCompare(b.task));
    isNameSort = false;
  } else if (isNameSort === false) {
    taskList.sort((a, b) => b.task.localeCompare(a.task));
    isNameSort = true;
  }
  localStorage.setItem("taskList", JSON.stringify(taskList));
  printTaskList(taskList);
}

function sortByDeadline(event) {
  event.preventDefault();
  document.querySelector('#sortByText').innerHTML = 'deadline';
  if (isDeadlineSort) {
    taskList.sort((a, b) => b.deadline.localeCompare(a.deadline));
    isDeadlineSort = false;
  } else if (isDeadlineSort === false) {
    taskList.sort((a, b) => a.deadline.localeCompare(b.deadline));
    isDeadlineSort = true;
  }
  localStorage.setItem("taskList", JSON.stringify(taskList));
  printTaskList(taskList);
}

function sortByComplete() {
  const done = taskList.sort((a, b) => {
    if (a.isComplete < b.isComplete) {
      return -1;
  
    }
    if (a.isComplete > b.isComplete) {
      return 1;
    }
    return 0;
  });
    localStorage.setItem("taskList", JSON.stringify(taskList));
    printTaskList(taskList);
    console.log(taskList);
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

function toggleColorMode() {
  colorTheme.classList.toggle('change');
  if (colorTheme.classList.contains('change')) {
    colorModeIcon.textContent = "dark_mode";
  } else {
    colorModeIcon.textContent = "light_mode";
  }
};

colorModeIcon.addEventListener('click', toggleColorMode);

/************************************************************************************************************
 * ------------------------------------  get from local Storage ---------------------------------------------
 ************************************************************************************************************/

getFromLocalStorage();