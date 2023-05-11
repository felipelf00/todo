const projects = [];

const Project = function (name) {
  const tasks = [];
  const addTask = (title, description, due, priority, notes, complete) => {
    tasks.push(Task(title, description, due, priority, notes, complete));
  };

  return { name, tasks, addTask };
};

const newProject = (name) => {
  projects.push(Project(name));
};

const Task = (title, description, due, priority, notes, complete) => {
  const toggleComplete = () => {
    if (!this.complete) {
      this.complete = true;
    } else {
      this.complete = false;
    }
  };
  return {
    title,
    description,
    due,
    priority,
    notes,
    complete,
    toggleComplete,
  };
};

// const taskList = [];

// const newTask = Task(
//   "Studies",
//   "Do this stuff",
//   "Create todo list",
//   "In progress",
//   "date?",
//   3,
//   "blablabla",
//   false
// );

// const otherTask = Task(
//   "Casa",
//   "Roupa",
//   "Estendelas",
//   "Concluído",
//   "date?",
//   2,
//   "nhenhenhe",
//   true
// );

// taskList.push(newTask);
// taskList.push(otherTask);

export { projects, newProject };
