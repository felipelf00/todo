const projects = [];

const Project = function (name) {
  const tasks = [];
  const addTask = (title, description, due, priority, notes, complete) => {
    tasks.push(Task(title, description, due, priority, notes, complete, this));
  };
  const removeTask = (task) => {
    const index = tasks.indexOf(task);
    if (index !== -1) {
      tasks.splice(index, 1);
    }
  };
  return { name, tasks, addTask, removeTask };
};

const newProject = (name) => {
  const project = Project(name);
  projects.push(project);
  return project;
};

const Task = (title, description, due, priority, notes, complete, project) => {
  const toggleComplete = function () {
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

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}

let storageIsAvailable = storageAvailable("localStorage");

const storeProject = function (project) {
  if (storageIsAvailable) {
    localStorage.setItem(project.name, JSON.stringify(project.tasks));
    // console.log(localStorage.getItem(project.name));
  }
};

// const getProjectsFromStorage = function () {
//   for (var project in localStorage) {
//     if (typeof localStorage[project] === "string") {
//       projects.push(newProject(localStorage[project]));
//     }
//   }
// };

const getProjectsFromStorage = function () {
  for (var i = 0; i < localStorage.length; i++) {
    const projectName = localStorage.key(i);
    const tasksString = localStorage.getItem(projectName);

    if (tasksString) {
      const tasks = JSON.parse(tasksString);
      const project = newProject(projectName);

      tasks.forEach((task) => {
        project.addTask(
          task.title,
          task.description,
          task.due,
          task.priority,
          task.notes,
          task.complete
        );
      });
    }
  }
};

getProjectsFromStorage();

export { projects, newProject, Task, storeProject };
