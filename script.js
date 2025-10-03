document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");

  const addButton = document.getElementById("add-task-btn");

  const taskList = document.getElementById("task-list");

  function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") {
      alert("Please Enter your Todo List");
      return;
    }

    const listElement = document.createElement("li");
    listElement.textContent = taskText;
    // remove todoList Button
    const textButton = document.createElement("button");
    textButton.textContent = "Remove";
    textButton.classList.add("remove-btn");

    textButton.addEventListener("click", () => {
      textButton.parentElement.remove();
    });

    listElement.appendChild(textButton);

    taskList.appendChild(listElement);
    taskInput.value = "";
  }
  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  });

  addButton.addEventListener("click", addTask);
});
