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
    const span = document.createElement('span');
    span.innerHTML = "&times;";
    span.setAttribute('data-index', index);

    li.appendChild(span);
    list_container.appendChild(li);
  });
}
button.addEventListener('click', () => {
  const text = input_box.value.trim();
  if (text === "") {
    alert("You must write something");
    return;
  }
  tasks.push({ text: text, checked: false });  
  input_box.value = "";
  renderTasks();
});
list_container.addEventListener('click', (e) => {
  const index = e.target.getAttribute('data-index');

  if (e.target.tagName === "LI") {
    const liIndex = Array.from(list_container.children).indexOf(e.target);
    tasks[liIndex].checked = !tasks[liIndex].checked;
    renderTasks();
  }
  if (e.target.tagName === "SPAN" && index !== null) {
    tasks.splice(index, 1); // remove from array
    renderTasks();
  }
});