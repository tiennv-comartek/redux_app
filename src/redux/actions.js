import { ADD_TODO, TOGGET_TODO,SET_FILTER } from "./actionsTypes";

let nextTodoId = 0;
export const addTodo = content => ({
    type: ADD_TODO,
    payload: {
        id: ++nextTodoId,
        content
    }
})
export const toggleTodo = id => ({
    type: TOGGET_TODO,
    payload: {id} 
});
export const setFilter = filter => ({
    type: SET_FILTER,
    payload:{filter}
});
