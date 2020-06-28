/* eslint-disable linebreak-style */
/* eslint-disable no-console */
const input = document.querySelector('.task_input');
const allTaskRows = document.querySelector('.all_task_rows');// Сюда довавляются новые задачи с секцию "All task"
const addPinnedTasks = [...document.getElementsByClassName('add_pinned_task')];// Здесь отслеживаются кнопки с секции "All task", но далее не получается их отследить.
console.log(addPinnedTasks.length);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    if (input.value !== '') {
      allTaskRows.insertAdjacentHTML('beforeEnd', `<div class="all_task_row"><p>${input.value.trim()}</p><button class="add_pinned_task"></button></div>`);
      input.value = '';
    }
  }

  // console.log(input.value.trim().toLowerCase());
});

addPinnedTasks.forEach((addPinnedTask) => {
  addPinnedTask.addEventListener('click', (e) => {
    /// /Здесь попытался прослушать кнопки с секции "All task", но далее не получается их отследить.
    console.log(e.target);
    console.log(addPinnedTasks.length);
  });
});
