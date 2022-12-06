import './style/style.scss';

const taskList: string[] = [];
const newTaskInputField = document.querySelector('#newTaskInput');
const addTaskBtn = document.querySelector('#addTaskBtn');
const tasks = document.querySelector('#tasks');

// Todays Date
const todaysDate = new Date();
document.querySelector('#todaysDate')!.innerHTML = todaysDate.toLocaleDateString();

/**
 * Btn to add task from input value
 */
// eslint-disable-next-line @typescript-eslint/no-use-before-define
addTaskBtn?.addEventListener('click', addNewTask);

// testing testing
function printTaskList() {
  tasks!.innerHTML = '';
  for (let i = 0; i < taskList.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const task: string = taskList[i];
    const taskNode = document.createElement('li');
    const taskTextnode = document.createTextNode(task);
    taskNode.appendChild(taskTextnode);
    tasks?.appendChild(taskNode);
  }
}

function addNewTask() {
  taskList.push(newTaskInputField.value);
  console.log(taskList);
  printTaskList();
}

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
