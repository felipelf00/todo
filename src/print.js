import { projects, newProject, Task, storeProject } from "./script";

const createHeader = function () {
  const container = document.createElement("header");

  const burger = document.createElement("i");
  burger.classList.add("material-icons");
  burger.classList.add("burger");
  burger.classList.add("clickable");
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
  home.classList.add("clickable");
  home.id = "home";
  home.textContent = "Principal";
  home.addEventListener("click", () => {
    displayHome();
  });
  const counterHome = document.createElement("span");
  counterHome.classList.add("counter");
  counterHome.dataset.id = "global";
  counterHome.dataset.context = "general";
  counterHome.textContent = countTasks(
    counterHome.dataset.id,
    counterHome.dataset.context
  );
  home.appendChild(counterHome);

  const today = document.createElement("div");
  today.classList.add("navigation");
  today.classList.add("clickable");
  today.id = "today";
  today.textContent = "Hoje";
  today.addEventListener("click", () => {
    displayToday();
  });
  const counterToday = document.createElement("span");
  counterToday.classList.add("counter");
  counterToday.dataset.id = "global";
  counterToday.dataset.context = "today";
  counterToday.textContent = countTasks(
    counterToday.dataset.id,
    counterToday.dataset.context
  );
  today.appendChild(counterToday);

  const week = document.createElement("div");
  week.classList.add("navigation");
  week.classList.add("clickable");
  week.id = "week";
  week.textContent = "Esta semana";
  week.addEventListener("click", () => {
    displayThisWeek();
  });
  const counterThisWeek = document.createElement("span");
  counterThisWeek.classList.add("counter");
  counterThisWeek.dataset.id = "global";
  counterThisWeek.dataset.context = "thisWeek";
  counterThisWeek.textContent = countTasks(
    counterThisWeek.dataset.id,
    counterThisWeek.dataset.context
  );
  week.appendChild(counterThisWeek);

  const projectList = document.createElement("div");
  projectList.classList.add("navigation");
  projectList.id = "projects";
  projectList.textContent = "Projetos: ";

  const list = document.createElement("ul");
  projectList.appendChild(list);

  document.addEventListener("DOMContentLoaded", function () {
    loadProjects();
  });

  const addNewProject = document.createElement("div");
  addNewProject.id = "new-project";
  addNewProject.classList.add("clickable");
  const addButton = document.createElement("button");
  addButton.textContent = "+";
  // addButton.classList.add("add-button");
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

  document.addEventListener("DOMContentLoaded", () => {
    const main = document.querySelector("#main");
    main.addEventListener("click", () => {
      if (container.classList.contains("active")) {
        container.classList.remove("active");
      }
    });
  });

  container.appendChild(home);
  container.appendChild(today);
  container.appendChild(week);
  container.appendChild(projectList);

  return container;
};

const loadProjects = function () {
  const list = document.querySelector("#projects ul");
  list.innerHTML = "";

  projects.forEach((project) => {
    const item = document.createElement("li");
    item.textContent = project.name;
    item.classList.add("clickable");

    const counter = document.createElement("span");
    counter.classList.add("counter");
    counter.dataset.id = projects.indexOf(project);
    counter.dataset.context = "general";
    counter.textContent = countTasks(
      projects.indexOf(project),
      counter.dataset.context
    );
    item.appendChild(counter);

    item.addEventListener("click", () => {
      // selectProject(project);
      // const activeProject = document.querySelectorAll(".navigation li.active");
      // activeProject.forEach((element) => {
      //   element.classList.remove("active");
      // });

      // const active = document.querySelectorAll(".navigation.active");
      // active.forEach((element) => {
      //   element.classList.remove("active");
      // });

      activeProject = project;
      displayProject(project);

      item.classList.add("active");
    });

    // project.tasks.forEach((task) => {
    //   const main = document.querySelector("#main");
    //   main.addEventListener("change", () => {
    //     const taskCheckbox = document.querySelectorAll(".task-checkbox");
    //     taskCheckbox.forEach((checkbox) => {
    //       checkbox.addEventListener("change", () => {
    //         counter.textContent = countTasks(project);
    //       });
    //     });
    //   });
    // });

    list.appendChild(item);
  });

  return list;
};

let activeProject;

// const selectProject = function (project) {
//   const main = document.querySelector("main");
//   main.innerHTML = "";
//   activeProjectIndex = projects.indexOf(project);
//   main.appendChild(displayProject(projects[activeProjectIndex]));
// };

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
  button.classList.add("clickable");
  button.textContent = "Criar projeto";
  button.addEventListener("click", () => {
    if (project.value !== "") {
      const currentProject = newProject(project.value);
      // selectProject(currentProject);
      displayProject(currentProject);

      // test storage
      storeProject(currentProject);

      project.value = "";
      loadProjects();
      container.classList.add("hidden");
      document.querySelector("#shadow").classList.add("hidden");
    } else {
      project.setCustomValidity("Campo obrigatório");
      project.reportValidity();
    }
  });

  container.appendChild(projectLabel);
  container.appendChild(project);
  container.appendChild(button);

  return container;
};

// const displayProject = function (project) {
//   const container = document.createElement("div");
//   container.id = "project-container";

//   const projectTitle = document.createElement("h2");
//   projectTitle.textContent = project.name;

//   const addNewTask = document.createElement("div");
//   addNewTask.id = "new-task";
//   addNewTask.classList.add("clickable");
//   const addButton = document.createElement("button");
//   addButton.textContent = "+";
//   // addButton.classList.add("add-button");
//   const newTaskLabel = document.createElement("span");
//   newTaskLabel.textContent = "Nova Tarefa";
//   addNewTask.appendChild(addButton);
//   addNewTask.appendChild(newTaskLabel);

//   addNewTask.addEventListener("click", () => {
//     document.querySelector("#new-task-form").classList.remove("hidden");
//     document.querySelector("#shadow").classList.remove("hidden");
//   });

//   container.appendChild(projectTitle);
//   container.appendChild(addNewTask);
//   project.tasks.forEach((task) => {
//     container.appendChild(displayTask(task, project));
//   });

//   return container;
// };

const displayProject = function (project) {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const title = document.createElement("h2");
  title.textContent = project.name;

  const active = document.querySelectorAll(".navigation.active");
  active.forEach((element) => {
    element.classList.remove("active");
  });

  const activeProjects = document.querySelectorAll(".navigation .active");
  activeProjects.forEach((element) => {
    element.classList.remove("active");
  });

  main.appendChild(title);
  main.appendChild(displayProjectCard(project, "general"));
};

const createTaskForm = function () {
  const container = document.createElement("div");
  container.id = "new-task-form";
  container.classList.add("form");
  container.classList.add("hidden");

  // --- Título da tarefa
  const titleLabel = document.createElement("label");
  titleLabel.for = "task-title";
  titleLabel.textContent = "Tarefa: ";

  const title = document.createElement("input");
  title.id = "task-title";
  title.name = "task-title";
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
  const blank = document.createElement("option");
  blank.value = "";
  priority.appendChild(blank);

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
  button.classList.add("clickable");
  button.textContent = "Adicionar tarefa";

  // --- Add task to project object
  button.addEventListener("click", () => {
    activeProject.addTask(
      title.value,
      description.value,
      due.value,
      priority.value,
      notes.value
    );

    // test storage
    storeProject(activeProject);

    // melhorar para que possa adicionar tarefas em outras telas
    // const lastTaskIndex = projects[activeProjectIndex].tasks.length - 1;
    // document
    //   .querySelector("#project-container")
    //   .appendChild(
    //     displayTask(
    //       projects[activeProjectIndex].tasks[lastTaskIndex],
    //       projects[activeProjectIndex]
    //     )
    //   );

    const main = document.querySelector("#main");

    const counter = main.querySelector(
      `[data-id="${projects.indexOf(activeProject)}"]`
    );
    const oldProjectCard = counter.closest(".project-card");
    const newProjectCard = displayProjectCard(
      activeProject,
      counter.dataset.context
    );

    console.log(counter);
    console.log(oldProjectCard);

    oldProjectCard.parentNode.replaceChild(newProjectCard, oldProjectCard);
    updateCounters();

    container.classList.add("hidden");
    document.querySelector("#shadow").classList.add("hidden");

    title.value = "";
    description.value = "";
    due.value = "";
    priority.value = "";
    notes.value = "";

    updateCounters();
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

const displayTask = function (task, project) {
  const container = document.createElement("div");
  container.classList.add("task");

  const taskHeader = document.createElement("div");
  taskHeader.classList.add("task-header");

  const expander = document.createElement("span");
  expander.classList.add("material-icons");
  expander.classList.add("clickable");
  expander.classList.add("left");
  expander.textContent = "expand_more";

  expander.addEventListener("click", () => {
    container.classList.toggle("expanded");
    expander.classList.toggle("clicked");
  });

  const title = document.createElement("span");
  title.textContent = task.title;
  title.classList.add("center");

  title.addEventListener("click", () => {
    container.classList.toggle("expanded");
    expander.classList.toggle("clicked");
  });

  const cornerIcons = document.createElement("span");
  cornerIcons.classList.add("task-icons");
  cornerIcons.classList.add("right");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("task-checkbox");
  // check.dataset.projectIndex = projects.indexOf(project); // maybe not necessary

  check.addEventListener("change", () => {
    title.classList.toggle("completed");
    task.toggleComplete();
    storeProject(project);
    updateCounters();
  });

  if (task.complete) {
    check.checked = true;
    title.classList.add("completed");
  }

  const editTask = document.createElement("span");
  editTask.textContent = "edit";
  editTask.classList.add("material-icons");
  editTask.classList.add("clickable");

  const deleteTask = document.createElement("span");
  deleteTask.textContent = "delete";
  deleteTask.classList.add("material-icons");
  deleteTask.classList.add("clickable");

  deleteTask.addEventListener("click", () => {
    project.removeTask(task);
    storeProject(project);

    const oldProjectCard = deleteTask.closest(".project-card");

    const counter = oldProjectCard.querySelector(".counter");
    const parentProject = projects[counter.dataset.id];
    const projectContext = counter.dataset.context;
    const newProjectCard = displayProjectCard(parentProject, projectContext);
    if (newProjectCard) {
      oldProjectCard.parentNode.replaceChild(newProjectCard, oldProjectCard);
    } else {
      oldProjectCard.remove();
    }
    updateCounters();
  });

  cornerIcons.appendChild(editTask);
  cornerIcons.appendChild(deleteTask);
  cornerIcons.appendChild(check);

  taskHeader.appendChild(expander);
  taskHeader.appendChild(title);
  taskHeader.appendChild(cornerIcons);

  const taskBody = document.createElement("div");
  taskBody.classList.add("task-body");

  const description = document.createElement("div");
  description.textContent = task.description;

  const due = document.createElement("div");
  const formattedDate = task.due.split("-").reverse().join("/");
  due.textContent = `Prazo: ${formattedDate}`;

  const priority = document.createElement("div");
  priority.textContent = `Prioridade: ${task.priority}`;

  const notes = document.createElement("div");
  notes.textContent = task.notes;

  taskBody.appendChild(description);
  taskBody.appendChild(due);
  taskBody.appendChild(priority);
  taskBody.appendChild(notes);

  container.appendChild(taskHeader);
  container.appendChild(taskBody);

  return container;
};

const displayProjectCard = function (project, context) {
  const container = document.createElement("div");
  container.classList.add("project-card");
  container.classList.add("expanded");

  const projectHeader = document.createElement("div");
  projectHeader.classList.add("project-header");
  projectHeader.classList.add("clickable");

  projectHeader.addEventListener("click", () => {
    container.classList.toggle("expanded");
    expander.classList.toggle("clicked");
  });

  const expander = document.createElement("span");
  expander.classList.add("material-icons");
  expander.classList.add("clicked");
  expander.textContent = "expand_more";

  const title = document.createElement("span");
  title.textContent = project.name;
  title.classList.add("card-title");

  const counter = document.createElement("span");
  counter.classList.add("counter");
  counter.dataset.id = projects.indexOf(project);
  counter.dataset.context = context;

  if (context === "today") {
    counter.dataset.context = "today";
  }
  if (context === "thisWeek") {
    counter.dataset.context = "thisWeek";
  }
  if (context === "general") {
    counter.dataset.context = "general";
  }
  counter.textContent = countTasks(counter.dataset.id, counter.dataset.context);

  const addTask = document.createElement("button");
  addTask.textContent = "+ Tarefa";
  addTask.classList.add("clickable");
  addTask.classList.add("add-button");
  addTask.addEventListener("click", () => {
    document.querySelector("#new-task-form").classList.remove("hidden");
    document.querySelector("#shadow").classList.remove("hidden");
    activeProject = project;
  });

  const projectBody = document.createElement("div");
  projectBody.classList.add("project-body");

  let hasTasksToDisplay = false;

  switch (context) {
    case "today":
      project.tasks.forEach((task) => {
        if (isDueToday(task)) {
          projectBody.appendChild(displayTask(task, project, context));
          hasTasksToDisplay = true;
        }
      });
      if (!hasTasksToDisplay) {
        return;
      }
      break;
    case "thisWeek":
      project.tasks.forEach((task) => {
        if (isDueThisWeek(task)) {
          projectBody.appendChild(displayTask(task, project, context));
          hasTasksToDisplay = true;
        }
      });
      if (!hasTasksToDisplay) {
        return;
      }
      break;
    case "general":
      if (project.tasks.length === 0) {
        return;
      }
      project.tasks.forEach((task) => {
        projectBody.appendChild(displayTask(task, project, context));
        hasTasksToDisplay = true;
      });
      break;
  }

  projectHeader.appendChild(expander);
  projectHeader.appendChild(title);
  projectHeader.appendChild(counter);
  container.appendChild(projectHeader);
  container.appendChild(addTask);
  container.appendChild(projectBody);

  return container;
};

const displayHome = function () {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const home = document.querySelector("#home");
  const active = document.querySelectorAll(".navigation.active");
  active.forEach((element) => {
    element.classList.remove("active");
  });

  const activeProjects = document.querySelectorAll(".navigation .active");
  activeProjects.forEach((element) => {
    element.classList.remove("active");
  });

  home.classList.add("active");

  const title = document.createElement("h2");
  title.textContent = "Todas as tarefas:";
  main.appendChild(title);

  // projects.forEach((project) => {
  //   let projectIsDisplayed = false;
  //   const projectCard = displayProjectCard(project, "general");

  //   project.tasks.forEach((task) => {
  //     if (!projectIsDisplayed) {
  //       main.appendChild(projectCard);
  //       projectIsDisplayed = true;
  //     }
  //     projectCard.lastElementChild.appendChild(displayTask(task, project));
  //   });
  // });

  projects.forEach((project) => {
    const newProjectCard = displayProjectCard(project, "general");
    if (newProjectCard) {
      main.appendChild(newProjectCard);
    }
  });
};

const displayToday = function () {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const today = document.querySelector("#today");
  const active = document.querySelectorAll(".navigation.active");
  active.forEach((element) => {
    element.classList.remove("active");
  });

  const activeProjects = document.querySelectorAll(".navigation .active");
  activeProjects.forEach((element) => {
    element.classList.remove("active");
  });

  today.classList.add("active");

  const title = document.createElement("h1");
  title.textContent = "Tarefas para hoje:";

  main.appendChild(title);

  // projects.forEach((project) => {
  //   let projectIsDisplayed = false;
  //   const projectCard = displayProjectCard(project, "today");

  //   project.tasks.forEach((task) => {
  // currentDate.getUTCDate() === taskDueDate.getUTCDate();

  //     if (isDueToday(task)) {
  //       if (!projectIsDisplayed) {
  //         const projectName = document.createElement("h2");
  //         projectName.textContent = project.name;
  //         main.appendChild(projectCard);

  //         projectIsDisplayed = true;
  //       }
  //       projectCard.lastElementChild.appendChild(displayTask(task, project));
  //     }
  //   });
  // });

  projects.forEach((project) => {
    const newProjectCard = displayProjectCard(project, "today");
    if (newProjectCard) {
      main.appendChild(newProjectCard);
    }
    // main.appendChild(displayProjectCard(project, "today"));
  });
};

const isDueToday = function (task) {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const taskDueDate = new Date(task.due);

  return (
    currentDate.getUTCFullYear() === taskDueDate.getUTCFullYear() &&
    currentDate.getUTCMonth() === taskDueDate.getUTCMonth() &&
    currentDate.getUTCDate() === taskDueDate.getUTCDate()
  );
};

const displayThisWeek = function () {
  const main = document.querySelector("#main");
  main.innerHTML = "";

  const week = document.querySelector("#week");
  const active = document.querySelectorAll(".navigation.active");
  active.forEach((element) => {
    element.classList.remove("active");
  });

  const activeProjects = document.querySelectorAll(".navigation .active");
  activeProjects.forEach((element) => {
    element.classList.remove("active");
  });

  week.classList.add("active");

  const title = document.createElement("h1");
  title.textContent = "Tarefas para essa semana:";

  main.appendChild(title);

  // projects.forEach((project) => {
  //   let projectIsDisplayed = false;
  //   const projectCard = displayProjectCard(project, "thisWeek");

  //   project.tasks.forEach((task) => {
  //     if (isDueThisWeek(task)) {
  //       if (!projectIsDisplayed) {
  //         const projectName = document.createElement("h2");
  //         projectName.textContent = project.name;
  //         main.appendChild(projectCard);

  //         projectIsDisplayed = true;
  //       }
  //       projectCard.lastElementChild.appendChild(displayTask(task, project));
  //     }
  //   });
  // });
  projects.forEach((project) => {
    const newProjectCard = displayProjectCard(project, "thisWeek");
    if (newProjectCard) {
      main.appendChild(newProjectCard);
    }
  });
};

const isDueThisWeek = function (task) {
  const taskDueDate = new Date(task.due);
  const utcDate = new Date(
    taskDueDate.getUTCFullYear(),
    taskDueDate.getUTCMonth(),
    taskDueDate.getUTCDate()
  );

  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  const firstDay = new Date(
    currentDate.setDate(currentDate.getDate() - currentDate.getDay())
  );
  const lastDay = new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    firstDay.getDate() + 6
  );

  return utcDate >= firstDay && utcDate <= lastDay;
};

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

  const container = document.createElement("div");
  container.appendChild(createSidebar());
  container.appendChild(main);
  container.id = "body-container";

  body.appendChild(createTaskForm());
  body.appendChild(createProjectForm());
  body.appendChild(shadow);
  body.appendChild(createHeader());
  body.appendChild(container);

  displayHome();
};

const countTasks = function (id, context) {
  let totalTasks = 0; //jogar pra fora do bloco?

  if (id === "global") {
    switch (context) {
      case "general":
        for (const project of projects) {
          totalTasks += countTasks(projects.indexOf(project), "general");
        }
        return totalTasks;
      case "today":
        for (const project of projects) {
          totalTasks += countTasks(projects.indexOf(project), "today");
        }
        return totalTasks;
      case "thisWeek":
        for (const project of projects) {
          totalTasks += countTasks(projects.indexOf(project), "thisWeek");
        }
        return totalTasks;
    }
  }
  switch (context) {
    case "general":
      return projects[id].tasks.filter((task) => !task.complete).length;
    case "today":
      for (const task of projects[id].tasks) {
        if (isDueToday(task) && !task.complete) {
          totalTasks += 1;
        }
      }
      return totalTasks;
    case "thisWeek":
      for (const task of projects[id].tasks) {
        if (isDueThisWeek(task) && !task.complete) {
          totalTasks += 1;
        }
      }
      return totalTasks;
  }
};

const updateCounters = function () {
  const counters = document.querySelectorAll(".counter");
  counters.forEach((counter) => {
    counter.textContent = countTasks(
      counter.dataset.id,
      counter.dataset.context
    );
    // if (counter.textContent == 0) {
    //   counter.classList.add("hidden");
    // } else {
    //   counter.classList.remove("hidden");
    // }
  });
};

export { printPage };
