// const initialState = {
//       search: "",
//       status: "All",
//       priorities: [],
//   };
//   const filterReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "filterList/searchFilterChange":
//         return {
//             ...state,
//             search: action.payload,
//         };
//       case "filterList/statusFilterChange":
//         return {
//             ...state,
//             status: action.payload,
//         };
//       case "filterList/prioritiesFilterChange":
//         return {
//             ...state,
//             priorities: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
//   export default filterReducer;
  
import {createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filters',
    initialState: {
      search: "",
      status: "All",
      priorities: [],
    },
    reducers:  {
    searchFilterChange: (state, action) =>
    {
        state.search = action.payload;
    },
    statusFilterChange: (state, action) => {
        state.status = action.payload;
    },
    priorityFilterChange: (state, action) => {
        state.priorities = action.payload;
    },
    }
  });