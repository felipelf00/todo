import { taskList } from "./script";

const createTaskDisplay = function (task) {
  const container = document.createElement("div");

  const project = document.createElement("div");
  project.textContent = task.project;

  const title = document.createElement("h2");
  title.textContent = task.title;

  const description = document.createElement("div");
  description.textContent = task.description;

  const state = document.createElement("div");
  state.textContent = task.state;

  const due = document.createElement("div");
  due.textContent = task.due;

  const priority = document.createElement("div");
  priority.textContent = task.priority;

  const notes = document.createElement("div");
  notes.textContent = task.notes;

  // const complete = document.createElement("div")

  container.appendChild(project);
  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(state);
  container.appendChild(due);
  container.appendChild(priority);
  container.appendChild(notes);

  return container;
};

const printTasks = () => {
  taskList.forEach((task) => {
    document.querySelector("body").appendChild(createTaskDisplay(task));
  });
};

export { printTasks };
