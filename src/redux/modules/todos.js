const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const removeTodo = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const switchTodo = (payload) => {
  return {
    type: SWITCH_TODO,
    payload,
  };
};

const initialState = [
  {
    id: 1,
    title: "제목1",
    contents: "내용1",
    isDone: false,
  },
  {
    id: 2,
    title: "제목2",
    contents: "내용2",
    isDone: true,
  },
  {
    id: 3,
    title: "제목3",
    contents: "내용3",
    isDone: false,
  },
  {
    id: 4,
    title: "제목4",
    contents: "내용4",
    isDone: false,
  },
];

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((item) => item.id !== action.type);
    case SWITCH_TODO:
      return state.map((item) => {
        if (item.id === action.type) {
          return { ...item, isDone: !item.isDone };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default todos;
