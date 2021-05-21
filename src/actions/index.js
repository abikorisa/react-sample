export const ADDTASK = "addTask";
export const REMOVETASK = "removeTask";
export const DONETASK = "doneTask";

export const addTask = (task) => {
  return {
    type: ADDTASK,
    todo: {
      task: task,
      done: false,
    },
  };
};
export const removeTask = (index) => {
  return {
    type: REMOVETASK,
    index: index,
  };
};
export const doneTask = (index) => {
  return {
    type: DONETASK,
    index: index,
  };
};
