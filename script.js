 const input_box = document.getElementById('input-filed');
const list_container = document.getElementById('u-list');
const button = document.getElementById('but');
let tasks = [];
function renderTasks() {
  list_container.innerHTML = ""; 
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.checked) {
      li.classList.add('checked');
    }
  });
}
