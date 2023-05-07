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

taskList.push(newTask);

export { taskList };
