const Task = (
  project,
  title,
  description,
  state,
  due,
  priority,
  notes,
  complete
) => {
  const toggleComplete = () => {
    if (!this.complete) {
      this.complete = true;
    } else {
      this.complete = false;
    }
  };
  return {
    project,
    title,
    description,
    state,
    due,
    priority,
    notes,
    complete,
    toggleComplete,
  };
};

const taskList = [];

const newTask = Task(
  "Studies",
  "Do this stuff",
  "Create todo list",
  "In progress",
  "date?",
  3,
  "blablabla",
  false
);

const otherTask = Task(
  "Casa",
  "Roupa",
  "Estendelas",
  "Concluído",
  "date?",
  2,
  "nhenhenhe",
  true
);

taskList.push(newTask);
taskList.push(otherTask);

const projects = ["Estudos", "Trabalho", "Casa"];

export { taskList, projects };
