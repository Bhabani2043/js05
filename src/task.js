const form = document.getElementById('task-form');
const input = document.getElementById('task-input');
const list = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Load tasks
tasks.forEach(task => addTask(task));

// Add task
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const task = { text: input.value, completed: false };
  tasks.push(task);
  addTask(task);
  input.value = '';
  saveTasks();
});

// Render task
function addTask(task) {
  const li = document.createElement('li');
  li.textContent = task.text;
  if (task.completed) li.classList.add('completed');

  li.addEventListener('click', () => {
    task.completed = !task.completed;
    li.classList.toggle('completed');
    saveTasks();
  });

  const removeBtn = document.createElement('button');
  removeBtn.textContent = '✖';
  removeBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => t !== task);
    li.remove();
    saveTasks();
  });

  li.appendChild(removeBtn);
  list.appendChild(li);
}

// Save tasks
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
