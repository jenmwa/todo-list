import './style/style.scss';

/************************************************************************************************************
 * -------------------------------------------  Variables  -------------------------------------------------
 ************************************************************************************************************/

let taskList = [];
let doneTodos = [];

const tasks = document.querySelector('.tasks'); // the tasks <ul> element
const done = document.querySelector('.done'); // the done <ul> element

const newTaskInput = document.querySelector('#inputTaskField'); //task inputField
const deadlineInput = document.querySelector('#deadlineInput'); //deadline inputfield
const submitBtn = document.querySelector('#submit'); //submitBtn
const sortSection = document.querySelector('#sortSection'); //sorteringssektionen

// skriva ut dagens datum på listan enligt sv.datum
const todaysDate = new Date();
const dateField = document.querySelector('#todaysDate');
dateField.innerHTML = todaysDate.toLocaleDateString();

//val av kategori, som färgmarkeras, lista som loopas 
const cat = document.getElementsByClassName('material-symbols-outlined');
for (var i = 0; i < cat.length; i++) {
    cat[i].addEventListener('click', function(){
        this.classList.add("check");
    })
}
// const category = Array.from(document.querySelectorAll('.categories input'));
//     category.forEach((choice) => {
//         choice.addEventListener('change', choosedCategory);
//     });
//     function choosedCategory(ev) {
//         if (this.checked === true) {
//             ev.target.nextElementSibling.classList.add('check');
//         } else {
//             ev.target.nextElementSibling.classList.remove('check');
//         }
//         // if (this.checked != true) {
//         //     ev.target.nextElementSibling.classList.remove('check')
//         // }
//         console.log(ev.target.nextElementSibling);
     
        // if (this.checked === false) {
        //     ev.currentTarget.parentElement.classList.remove('check');
        //     }
        //     if (this.checked === true) {
        //     ev.currentTarget.parentElement.classList.add('check');
        //     }
    //console.log(category);
    //}

// funktion lägg till ny todo som objekt till array
function addNewTask() {
    if (newTaskInput.value.length === 0) {
        return;
    }
    if (taskList.indexOf(newTaskInput.value) === -1) { // GÖR OM, nu kan du lägga till samma sak flera
        const selectedCategory = document.querySelector("input[name='category']:checked").value; 
        const todoInput = {
            task: newTaskInput.value,
            deadline: deadlineInput.value,
            addedDate: todaysDate,
            category: selectedCategory, 
            isComplete: false, // avbockade tasks ska längst ner i listan men fortfarande synas i listan
          };
        taskList.push(todoInput);
        addToLocalStorage(taskList);
        newTaskInput.value = '';
        deadlineInput.value = '';
  }
}
console.log(taskList);

// funktion skriv ut vår lista med todo's
function printTaskList(taskList) {
    tasks.innerHTML='';
    
    for (let i = 0; i < taskList.length; i++) {
        tasks.innerHTML += `
        <li data-id="${i}"> <div>
        <input type="checkbox" name="checkbox" class="checkbox" data-id="${i}" ${taskList[i].isComplete}>
        <span class="text" id="texttodo">${taskList[i].task}</span><br>
        <span class="text">deadline: ${taskList[i].deadline}</span></div><div class="rightsection">
        <span class="material-symbols-outlined" id="favorite">${taskList[i].category}</span>
        <button class="material-symbols-outlined" data-id="${i}">close</button>
        </div>
        </li>`;
    }
    console.log(taskList)
    showsortSection ();

    //klick-event för tabort-knappen som anropar funktion removeTask
    const taskItems = Array.from(document.querySelectorAll('.tasks button'));
    taskItems.forEach((item) => {
        item.addEventListener('click', removeTask);
    });

    const checkBtn = Array.from(document.querySelectorAll('.tasks input'));
    checkBtn.forEach((check) => {
        check.addEventListener('click', checkedBox);
    });
}

//funktion när todo är checked, gråa ut text
function checkedBox(event) {
    if (this.checked === false) {
    event.currentTarget.parentElement.classList.remove('checked');
    }
    if (this.checked === true) {
    event.currentTarget.parentElement.classList.add('checked');
    doneTodos.push();
    }
    console.log('click', event.currentTarget.dataset.id); //jag vill gråa ut symbolen för just denna li med + ändra bakgrund? hur?
    
    console.log(taskList)
}

// funktion visa sorteringsalternativ OM det är 2 eller fler todo's på listan
function showsortSection () {
    if (taskList.length <= 1) {
        sortSection.classList.remove('open');
    } if (taskList.length >= 2) {
        sortSection.classList.add('open');
    }
}

// Funktion lägg till vår lista m objekt i localStorage som string
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

//funktion ta bort tasks per task, aktiveras av eventlyssnare på X-knapp i funktionen printTaskList
function removeTask(e) {
    const index = e.currentTarget.dataset.id; 
    if (index > -1) {
        taskList.splice(index, 1);
        printTaskList(taskList);
    }
    addToLocalStorage(taskList);
 }

 /**
  * EVENTLISTENERS
  */

// eventlyssnare klick på submit aktivera funktion addNewTask
submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    addNewTask();
    });

  //localStorage.clear(); rensa localstorage.