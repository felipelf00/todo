import { projects, newProject, Task } from "./script";

const createHeader = function () {
  const container = document.createElement("header");

  const burger = document.createElement("i");
  burger.classList.add("material-icons");
  burger.classList.add("burger");
  burger.textContent = "menu";
  burger.addEventListener("click", () => {
    document.querySelector(".sidebar").classList.toggle("active");
  });

  const title = document.createElement("h1");
  title.id = "title";
  title.textContent = "Minhas Tarefas";

  container.appendChild(burger);
  container.appendChild(title);

  return container;
};

const createSidebar = function () {
  const container = document.createElement("div");
  container.classList.add("sidebar");

  const home = document.createElement("div");
  home.classList.add("navigation");
  home.id = "home";
  home.textContent = "Principal";

  const today = document.createElement("div");
  today.classList.add("navigation");
  today.id = "today";
  today.textContent = "Hoje";

  const week = document.createElement("div");
  week.classList.add("navigation");
  week.id = "week";
  week.textContent = "Esta semana";

  const projectList = document.createElement("div");
  projectList.classList.add("navigation");
  projectList.id = "projects";
  projectList.textContent = "Projetos: ";

  // const list = document.createElement("ul");

  // projects.forEach((project) => {
  //   const item = document.createElement("li");
  //   item.textContent = project.name;
  //   item.addEventListener("click", () => {
  //     const main = document.querySelector("main");
  //     main.innerHTML = "";
  //     activeProjectIndex = projects.indexOf(project);
  //     main.appendChild(displayProject(projects[activeProjectIndex]));
  //   });
  //   list.appendChild(item);
  // });

  projectList.appendChild(loadProjects());

  const addNewProject = document.createElement("div");
  addNewProject.id = "new-project";
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("add-button");
  const newProjectLabel = document.createElement("span");
  newProjectLabel.textContent = "Novo Projeto";
  addNewProject.appendChild(addButton);
  addNewProject.appendChild(newProjectLabel);

  // Mostrar formulário de novo projeto
  addNewProject.addEventListener("click", () => {
    document.querySelector("#new-project-form").classList.remove("hidden");
    document.querySelector("#shadow").classList.remove("hidden");
  });

  projectList.appendChild(addNewProject);

  container.appendChild(home);
  container.appendChild(today);
  container.appendChild(week);
  container.appendChild(projectList);

  return container;
};

const loadProjects = function () {
  const list = document.createElement("ul");

  projects.forEach((project) => {
    const item = document.createElement("li");
    item.textContent = project.name;
    item.addEventListener("click", () => {
      const main = document.querySelector("main");
      main.innerHTML = "";
      activeProjectIndex = projects.indexOf(project);
      main.appendChild(displayProject(projects[activeProjectIndex]));
    });
    list.appendChild(item);
  });

  return list;
};

let activeProjectIndex;

const createProjectForm = function () {
  const container = document.createElement("div");
  container.id = "new-project-form";
  container.classList.add("form");
  container.classList.add("hidden");

  const projectLabel = document.createElement("label");
  projectLabel.for = "project";
  projectLabel.textContent = "Nome do projeto: ";

  const project = document.createElement("input");
  project.id = "project";
  project.name = "project";

  const button = document.createElement("button");
  button.id = "create-project";
  button.textContent = "Criar projeto";
  button.addEventListener("click", () => {
    newProject(project.value);
    project.textContent = "";
    document.querySelector("#projects").innerHTML = "";
    document.querySelector("#projects").appendChild(loadProjects());
    container.classList.add("hidden");
    document.querySelector("#shadow").classList.add("hidden");
  });

  container.appendChild(projectLabel);
  container.appendChild(project);
  container.appendChild(button);

  return container;
};

const displayProject = function (project) {
  const container = document.createElement("div");
  container.id = "project-container";

  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.name;

  const addNewTask = document.createElement("div");
  addNewTask.id = "new-task";
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("add-button");
  const newTaskLabel = document.createElement("span");
  newTaskLabel.textContent = "Nova Tarefa";
  addNewTask.appendChild(addButton);
  addNewTask.appendChild(newTaskLabel);

  addNewTask.addEventListener("click", () => {
    document.querySelector("#new-task-form").classList.remove("hidden");
    document.querySelector("#shadow").classList.remove("hidden");
  });

  container.appendChild(projectTitle);
  container.appendChild(addNewTask);
  project.tasks.forEach((task) => {
    container.appendChild(displayTasks(task));
  });

  return container;
};

const createTaskForm = function () {
  const container = document.createElement("div");
  container.id = "new-task-form";
  container.classList.add("form");
  container.classList.add("hidden");

  // --- Título da tarefa
  const titleLabel = document.createElement("label");
  titleLabel.for = "title";
  titleLabel.textContent = "Tarefa: ";

  const title = document.createElement("input");
  title.id = "title";
  title.name = "title";
  title.type = "text";

  //--- Descrição
  const descriptionLabel = document.createElement("label");
  descriptionLabel.for = "description";
  descriptionLabel.textContent = "Descrição: ";

  const description = document.createElement("textarea");
  description.id = "description";
  description.name = "description";
  description.rows = 4;

  //--- Prazo
  const dueLabel = document.createElement("label");
  dueLabel.for = "due";
  dueLabel.textContent = "Prazo: ";

  const due = document.createElement("input");
  due.id = "due";
  due.name = "due";
  due.type = "date";

  //--- Prioridade
  const priorityLabel = document.createElement("label");
  priorityLabel.for = "priority";
  priorityLabel.textContent = "Prioridade: ";

  const priority = document.createElement("select");
  priority.name = "priority";

  for (let i = 1; i <= 5; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    priority.appendChild(option);
  }

  //--- Observações
  const notesLabel = document.createElement("label");
  notesLabel.for = "notes";
  notesLabel.textContent = "Observações: ";

  const notes = document.createElement("textarea");
  notes.id = "description";
  notes.name = "description";
  notes.rows = 4;

  //--- Submit

  const button = document.createElement("button");
  button.id = "add-new-task";
  button.textContent = "Adicionar tarefa";

  button.addEventListener("click", () => {
    projects[activeProjectIndex].tasks.push(
      Task(
        title.value,
        description.value,
        due.value,
        priority.value,
        notes.value
      )
    );
    const lastTaskIndex = projects[activeProjectIndex].tasks.length - 1;
    document
      .querySelector("#project-container")
      .appendChild(
        displayTasks(projects[activeProjectIndex].tasks[lastTaskIndex])
      );
  });

  container.appendChild(titleLabel);
  container.appendChild(title);

  container.appendChild(descriptionLabel);
  container.appendChild(description);

  container.appendChild(dueLabel);
  container.appendChild(due);

  container.appendChild(priorityLabel);
  container.appendChild(priority);

  container.appendChild(notesLabel);
  container.appendChild(notes);

  container.appendChild(button);

  return container;
};

const displayTasks = function (task) {
  const container = document.createElement("div");

  const title = document.createElement("h2");
  title.textContent = task.title;

  const description = document.createElement("div");
  description.textContent = task.description;

  const due = document.createElement("div");
  due.textContent = task.due;

  const priority = document.createElement("div");
  priority.textContent = task.priority;

  const notes = document.createElement("div");
  notes.textContent = task.notes;

  // const state = document.createElement("div");
  // state.textContent = task.state;

  // const complete = document.createElement("div")

  // container.appendChild(project);
  container.appendChild(title);
  container.appendChild(description);
  // container.appendChild(state);
  container.appendChild(due);
  container.appendChild(priority);
  container.appendChild(notes);

  return container;
};

const printForm = () => {
  document.querySelector("body").appendChild(createTaskForm());
};

// const printTasks = () => {
//   taskList.forEach((task) => {
//     document.querySelector("body").appendChild(displayTasks(task));
//   });
// };

const clearPage = () => {
  const body = document.querySelector("body");
  body.innerHTML = "";
};

const printPage = () => {
  clearPage();

  const body = document.querySelector("body");

  const shadow = document.createElement("div");
  shadow.id = "shadow";
  shadow.classList.add("hidden");
  shadow.addEventListener("click", () => {
    shadow.classList.add("hidden");
    document.querySelectorAll(".form").forEach((element) => {
      element.classList.add("hidden");
    });
  });

  const main = document.createElement("main");
  main.id = "main";

  body.appendChild(createTaskForm());
  body.appendChild(createProjectForm());
  body.appendChild(shadow);
  body.appendChild(createHeader());
  body.appendChild(createSidebar());
  body.appendChild(main);
};
export { printPage };
