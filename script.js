let streak = localStorage.getItem("streak") || 0;

document.getElementById("streak").textContent = streak;

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach(task => {
  createTaskElement(task);
});

function addTask() {
  const input = document.getElementById("taskInput");

  if (input.value === "") {
    return;
  }

  createTaskElement(input.value);

  savedTasks.push(input.value);
  localStorage.setItem("tasks", JSON.stringify(savedTasks));

  input.value = "";

  streak++;
  localStorage.setItem("streak", streak);
  document.getElementById("streak").textContent = streak;
}

function createTaskElement(taskText) {
  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task-text">⬜ ${taskText}</span>

    <div>
      <button class="complete-btn">✔</button>
      <button class="delete-btn">X</button>
    </div>
  `;

  const completeBtn = li.querySelector(".complete-btn");
  const deleteBtn = li.querySelector(".delete-btn");
  const taskTextElement = li.querySelector(".task-text");

  completeBtn.addEventListener("click", () => {
    taskTextElement.classList.toggle("completed");
  });

  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
}

const darkModeToggle = document.getElementById("darkModeToggle");

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});