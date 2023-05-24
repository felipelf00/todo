const projects = [];

const Project = function (name) {
  const tasks = [];
  const addTask = (title, description, due, priority, notes, complete) => {
    tasks.push(Task(title, description, due, priority, notes, complete));
  };

  return { name, tasks, addTask };
};

const newProject = (name) => {
  const project = Project(name);
  projects.push(project);
  return project;
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

export { projects, newProject, Task };
