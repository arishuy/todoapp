export const addTodo = (data) => {
    return { 
        type: 'todoList/addTodo',
        payload: data
    }
}
export const toggleTodoStatus = (todoID) => {
    return { 
        type: 'todoList/toggleTodoStatus',
        payload: todoID
    }
}
export const searchFilterChange = (text) => {
    return {
        type: 'filterList/searchFilterChange',
        payload: text
    }
}
export const statusFilterChange = (status) => {
    return {
        type: 'filterList/statusFilterChange',
        payload: status
    }
}
export const priorityFilterChange = (priorities) => {
    return {
        type: 'filterList/prioritiesFilterChange',
        payload: priorities
    }
}
