let streak = 0;

function createTaskElement(taskText) {

  const input = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (input.value === "") {
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
  ✅ ${taskText}
  <button class="delete-btn">X</button>
  ;

  const deleteBtn = li.querySelector(".delete-btn");

  deleteBtn.addEventListener("click", () => {

  li.remove();

  });

  taskList.appendChild(li);

  input.value = "";

  streak++;
  document.getElementById("streak").textContent = streak;
}
