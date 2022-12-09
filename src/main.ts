import './style/style.scss';
// ul = id=list
// form id new-task-form
// input text = new-task-title
// button type submit

const tasks = document.querySelector<HTMLUListElement>('#tasks');
const app = document.querySelector<HTMLFormElement>('#app');
const newTaskInput = document.querySelector<HTMLInputElement>('#newTaskInput');
