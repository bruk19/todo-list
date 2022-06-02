import './style.css';
import moveSrc from './move.png';
import refreshSrc from './refresh.png';
import returnSrc from './return.png';

const returnImg = document.querySelector('.imgSubmit');
returnImg.src = returnSrc;

const refreshImg = document.querySelector('.imgRefresh');
refreshImg.src = refreshSrc;

const toDoListUI = document.querySelector('.to-do-list');

class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const list = [];

const appendTask = (item) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<label><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}>${item.description}</label>`;
  const moveImg = new Image();
  moveImg.src = moveSrc;
  taskUI.appendChild(moveImg);
  toDoListUI.appendChild(taskUI);
};

for (let i = 0; i < list.length; i += 1) {
  appendTask(list[i]);
}