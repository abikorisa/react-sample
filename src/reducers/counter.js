import { ADDTASK, REMOVETASK, DONETASK } from "../actions";

const initialState = {
  lists: [
    {
      task: "やること1",
      done: false,
    },
    {
      task: "やること2",
      done: false,
    },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDTASK:
      return {
        lists: [...state.lists, action.todo],
      };
    case DONETASK:
      const doneTasks = [...state.lists];
      doneTasks[action.index].done = true;
      return {
        lists: doneTasks,
      };
    case REMOVETASK:
      const removeTasks = [...state.lists];
      removeTasks.splice(action.index, 1);
      return {
        lists: removeTasks,
      };
    default:
      return state;
  }
};
