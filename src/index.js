import './style.css';

const toDoListUI = document.querySelector('.todo-list');


class Task {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const list = [new Task('Finsh the project', false, 0), new Task('Wash the dishes', false, 1)];

const appendTask = (item) => {
  const taskUI = document.createElement('li');
  taskUI.innerHTML = `<label><input type='checkbox' id = task-${item.index} class = 'check' value=${item.index}>${item.description}</label>`;
  toDoListUI.appendChild(taskUI);
  
  const l = taskUI.style;
  l.width = '100%';
};

for (let i = 0; i < list.length; i += 1) {
  appendTask(list[i]);
}