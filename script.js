document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("task-input");
  const addButton = document.getElementById("add-task-btn");
  const taskList = document.getElementById("task-list");

  function loadTasks() {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks.forEach((storedTask) => {
      // storedTask should be a string
      if (typeof storedTask === "string") {
        addTask(storedTask, false);
      }
    });
  }

  function addTask(taskText, save = true) {
    if (!taskText) {
      taskText = taskInput.value.trim();
    }

    if (taskText === "") {
      alert("Please add  It's Empty!");
      return;
    }

    const listElement = document.createElement("li");
    listElement.textContent = taskText;

    // remove button
    const textButton = document.createElement("button");
    textButton.textContent = "Remove";
    textButton.classList.add("remove-btn");

    textButton.addEventListener("click", () => {
      listElement.remove();
      removeFromLocalstorage(taskText);
    });

    listElement.appendChild(textButton);
    taskList.appendChild(listElement);

    taskInput.value = "";

    if (save) {
      let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
      storedTasks.push(taskText);
      localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }
  }

  function removeFromLocalstorage(taskToRemove) {
    let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    storedTasks = storedTasks.filter((task) => task !== taskToRemove);
    localStorage.setItem("tasks", JSON.stringify(storedTasks));
  }

  // ENTER key
  taskInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Button click
  addButton.addEventListener("click", () => addTask());

  // Load tasks
  loadTasks();
});
