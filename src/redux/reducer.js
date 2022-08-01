import todoReducer from '../components/TodoList/TodoSlice';
import filterReducer from '../components/Filters/FilterSlice';
import {combineReducers} from 'redux';

const rootReducer = combineReducers ({
    todoList: todoReducer,
    filters: filterReducer,
})
export default rootReducer;
