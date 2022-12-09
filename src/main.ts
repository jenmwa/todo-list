import './style/style.scss';

// Variables
// const taskList: string[] = [];
const newTaskInputField = <HTMLInputElement>document.querySelector('#newTaskInput'); // task inputfield
// const deadlineInputField = <HTMLInputElement>document.querySelector('#deadlineInput'); // deadline inputfield
const addTaskBtn = <HTMLButtonElement>document.querySelector('#addTaskBtn'); // addBtn
const tasks = <HTMLUListElement>document.querySelector('.tasks'); // the <ul> element
// const removeBtn = <HTMLButtonElement>document.querySelector('#removeBtn');

// Todays Date
const todaysDate = new Date();
const dateField = <HTMLDivElement>document.querySelector('#todaysDate');
dateField.innerHTML = todaysDate.toLocaleDateString();

// localStorage.setItem('date', dateField.innerHTML);
// console.log(localStorage.getItem('date'));

function loadTasks(): Task[] {
  const taskJSON = localStorage.getItem('TASKS');
  if (taskJSON == null) {
    return [];
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return JSON.parse(taskJSON);
}

const taskStorage: Task[] = loadTasks();

function saveTasks() {
  localStorage.setItem('TASKS', JSON.stringify(taskStorage));
}

function addNewTask(task: Task) {
  const item = document.createElement('li');
  const label = document.createElement('label');
  const checkbox = document.createElement('input');
  checkbox.addEventListener('change', () => {
    // eslint-disable-next-line no-param-reassign
    task.completed = checkbox.checked;
    console.log(taskStorage);
    saveTasks();
  });

  checkbox.type = 'checkbox';
  checkbox.checked = task.completed;
  label.append(checkbox, task.title);
  item.append(label);
  tasks?.append(item);
}

taskStorage.forEach(addNewTask);

// Task Object info
type Task = {
  title: string,
  // date: Date,
  // deadline: Date,
  completed: boolean,
  category: string
};

// localStorage.setItem('UserTask', JSON.stringify(UserTask));

// console.log(JSON.parse(localStorage.getItem('userTask') || '{}'));

// testing testing

// function printTaskList(): void {
//   tasks.innerHTML = '';
//   for (let i = 0; i < taskList.length; i++) {
//     tasks.innerHTML += `
//     <li><input type="checkbox" class="checkbox" data-id="${i}">
//     ${taskList[i]}<br>
//     <button class="material-symbols-outlined" data-name="${taskList[i]}" id="removeBtn">
//     close
//     </button></li>
//     </li>`;
//   }

// const taskName = taskList[i];
// const taskNode = document.createElement('li');
// const taskTextNode = document.createTextNode(taskName);
// taskNode.appendChild(taskTextNode);
// tasks.appendChild(taskNode);

// tasks.innerHTML = '';
// for (let i = 0; i < taskList.length; i++) {
//   tasks.innerHTML += `
//   <li><input type="checkbox" class="checkbox">
//   ${newTaskInputField.value}<br>
//   ${dateField.innerHTML} -
//   ${deadlineInputField.value} -
//   <button class="material-symbols-outlined" data-id="${i}" id="removeBtn">
//   close
//   </button></li>`;
// }
// console.log(taskList);
//
// }

// if (newTaskInputField.value.length === 0) {
//   return;
// }
// if (taskList.indexOf(newTaskInputField.value) === -1) {
//   taskList.push(newTaskInputField.value);
//   printTaskList();
//   newTaskInputField.value = '';
//   deadlineInputField.value = '';
// }

//   function removeItem(e: Event) {
//     // console.log(e.target.dataset.name);
//     // const index = taskList.indexOf((e.currentTarget as HTMLButtonElement).id);
//     // console.log((e.target as HTMLButtonElement).id);
//     if (e !== null && e.target instanceof HTMLElement) {
//       const index = taskList.indexOf(e.target.dataset.name);
//       if (index > -1) {
//         taskList.splice(index, 1);
//         printTaskList();
//       }
//     }
//   }
//   const taskItems = Array.from(document.querySelectorAll('li #removeBtn'));
//   console.log(taskItems);
//   taskItems.forEach((item) => {
//     item.addEventListener('click', removeItem);
//   });
// }

// Eventlisteners
addTaskBtn?.addEventListener('click', (e) => {
  e.preventDefault();

  if (newTaskInputField?.value === '' || newTaskInputField.value == null) {
    return;
  }

  const newTask: Task = {
    title: newTaskInputField.value,
    // date: dateField.innerHTML,
    // deadline: deadlineInputField.value,
    completed: false,
    category: 'kategori',
  };
  taskStorage.push(newTask);

  addNewTask(newTask);
  newTaskInputField.value = '';
});

// removeBtn.addEventListener('click', removeItem);

// All kod härifrån och ner är bara ett exempel för att komma igång

// // I denna utils-fil har vi lagrat funktioner som ofta används, t.ex. en "blanda array"-funktion
// import { shuffle } from './utils';

// // I denna fil har vi lagrat vår "data", i detta exempel en ofullständig kortlek
// import exampleCardDeck from './exampleArray';

// // Blanda kortleken
// const myShuffledCardDeck = shuffle(exampleCardDeck);

// /**
//  * Vänder upp/ner på det klickade kortet genom att toggla en CSS-klass.
//  * @param this - Det HTML-element som har klickats på
//  * @return {void}
//  */
// function flipCard(this: HTMLElement): void {
//   if (this !== undefined) {
//     this.classList.toggle('visible');
//   }
// }

// // Printa kortleken
// let cardString = '';
// myShuffledCardDeck.forEach((card: string) => {
//   cardString += `
//     <button class="card">
//       <span class="front">♠</span>
//       <span class="back">${card}</span>
//     </button>`;
// });

// document.querySelector<HTMLDivElement>('#app')!.innerHTML = cardString;

// document.querySelectorAll('.card').forEach((card) => {
//   card.addEventListener('click', flipCard);
// });
