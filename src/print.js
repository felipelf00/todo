import { projects, newProject } from "./script";

const createHeader = function () {
  const container = document.createElement("header");

  const burgerButton = document.createElement("div");
  const burger = document.createElement("span");
  burger.classList.add("material-icons");
  burger.textContent = "menu";
  burgerButton.appendChild(burger);

  const title = document.createElement("h1");
  title.classList.add("title");
  title.textContent = "Minhas Tarefas";

  container.appendChild(burgerButton);
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
  const list = document.createElement("ul");
  projects.forEach((project) => {
    const item = document.createElement("li");
    item.textContent = project.name;
    list.appendChild(item);
    //adicionar funções de navegação entre projetos
  });
  projectList.appendChild(list);

  const addNewProject = document.createElement("div");
  addNewProject.id = "new-project";
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.classList.add("add-button");
  const newProjectLabel = document.createElement("span");
  newProjectLabel.textContent = "Novo Projeto";
  addNewProject.appendChild(addButton);
  addNewProject.appendChild(newProjectLabel);

  //adicionar função para criação de novo projeto
  addNewProject.addEventListener("click", () => {});

  projectList.appendChild(addNewProject);

  container.appendChild(home);
  container.appendChild(today);
  container.appendChild(week);
  container.appendChild(projectList);

  return container;
};

const createProjectForm = function () {
  const container = document.createElement("div");
  container.classList.add("new-project-form");

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
    printMain(); // trocar por outra função depois
  });

  container.appendChild(projectLabel);
  container.appendChild(project);
  container.appendChild(button);

  return container;
};

const createForm = function () {
  const container = document.createElement("div");
  container.classList.add("new-task-form");

  // ---Projeto

  // const projectLabel = document.createElement("label");
  // projectLabel.for = "project";
  // projectLabel.textContent = "Projeto: ";

  // const project = document.createElement("input");
  // project.id = "project";
  // project.name = "project";
  // project.setAttribute("list", "projects-list");

  // const projectList = document.createElement("datalist");
  // projectList.id = "projects-list";
  // projects.forEach((project) => {
  //   const option = document.createElement("option");
  //   option.value = project;
  //   projectList.appendChild(option);
  // });

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

  // Append:
  // container.appendChild(projectLabel);
  // container.appendChild(project);
  // container.appendChild(projectList);

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

const createTaskDisplay = function (task) {
  const container = document.createElement("div");

  const project = document.createElement("div");
  project.textContent = task.project;

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

  const state = document.createElement("div");
  state.textContent = task.state;

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

const printForm = () => {
  document.querySelector("body").appendChild(createForm());
};

const printTasks = () => {
  taskList.forEach((task) => {
    document.querySelector("body").appendChild(createTaskDisplay(task));
  });
};

const printMain = () => {
  const body = document.querySelector("body");

  const shadow = document.createElement("div");
  shadow.id = "shadow";
  shadow.appendChild(createForm());
  shadow.appendChild(createProjectForm());

  body.appendChild(shadow);
  body.appendChild(createHeader());
  body.appendChild(createSidebar());
};
export { printMain };
