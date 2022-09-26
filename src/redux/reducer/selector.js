import { Visiable_Filter } from "../../contants";
export const getTodosbyFilter = (store,filter) => {
    switch (filter) {
        case Visiable_Filter.COMPLETE:
            return store.todos.filter(todo => todo.completed);
          case Visiable_Filter.INCOMPLETE:
            return store.todos.filter(todo => !todo.completed);
        default:
            return store.todos;
    }

}