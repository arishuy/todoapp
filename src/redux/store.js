// import {createStore} from 'redux';
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools()

// const store = createStore(rootReducer, composeEnhancers);
// export default store

import {configureStore} from '@reduxjs/toolkit';
import todoSlice from '../components/TodoList/TodoSlice';
import filtersSlice from '../components/Filters/FilterSlice';

const store = configureStore({ 
    reducer: 
    {
        todoList: todoSlice.reducer,
        filters: filtersSlice.reducer,
    }
})
export default store;