import { taskList, projects } from "./script";

const createForm = function () {
  const container = document.createElement("div");

  // ---Projeto
  const projectLabel = document.createElement("label");
  projectLabel.for = "project";
  projectLabel.textContent = "Projeto: ";

  const project = document.createElement("input");
  project.id = "project";
  project.name = "project";
  project.setAttribute("list", "projects-list");

  const projectList = document.createElement("datalist");
  projectList.id = "projects-list";
  // Adicionar array com a lista de projetos
  projects.forEach((project) => {
    const option = document.createElement("option");
    option.value = project;
    projectList.appendChild(option);
  });

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

  // Append:
  container.appendChild(projectLabel);
  container.appendChild(project);
  container.appendChild(projectList);

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

export { printTasks, printForm };
