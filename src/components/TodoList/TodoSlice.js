// const initialState = [
//       { id: 1, name: "Learn LOL", completed: false, priority: "High" },
//       { id: 2, name: "Learn LOL2", completed: true, priority: "Low" },
//       { id: 3, name: "Learn LOL3", completed: false, priority: "Medium" },
//     ];
//   const todoReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "todoList/addTodo":
//         return [...state.todoList, action.payload];
//       case "todoList/toggleTodoStatus":
//         return state.map((todo) => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
//       default:
//         return state;
//     }
//   };
//   export default todoReducer;

import {createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'todoList',
    initialState: [
      { id: 1, name: "Learn LOL", completed: false, priority: "High" },
      { id: 2, name: "Learn LOL2", completed: true, priority: "Low" },
      { id: 3, name: "Learn LOL3", completed: false, priority: "Medium" },
    ],
    reducers: {
      addTodo: (state, action) => {
        state.push(action.payload);
      },
      toggleTodoStatus: (state, action) => {
        const currentTodo = state.find(todo => todo.id === action.payload)
        if (currentTodo)
        currentTodo.completed = !currentTodo.completed;
    }
  }
})