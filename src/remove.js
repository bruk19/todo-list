const clearTask = (index, list) => {
  if (list.length === 0) return;
  const fil = list[index];
  list.filter(item => item === fil);

  document.querySelector(`#task-${index}`).parentNode.parentNode.remove();
  localStorage.setItem('tasks', JSON.stringify(list));
  if (list.length === 0) return;

  for (let i = index - 1; i < list.length; i += 1) {
    const nextCheck = document.getElementById('#task-1');
    /*
    console.log(nextCheck)
    nextCheck.id = `task-${i + 1}`;
    nextCheck.value -= 1;
    list[i].index -= 1;
    localStorage.setItem('tasks', JSON.stringify(list));
    */
  }
};

export default clearTask;