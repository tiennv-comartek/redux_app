
import { Box } from '@chakra-ui/react';
import { useSelector } from "react-redux";
import { Todo } from "./Todo";
import { getTodosbyFilter } from "../redux/reducer/selector";

export const TodoList = () => {
    const { todos,visibilityFilter } = useSelector(state => state);
    const filterTodos = getTodosbyFilter(todos,visibilityFilter);
    return (
        <Box paddingTop={30}>
            {filterTodos.length ? filterTodos.map(todo => (
                <Todo key={`todo-${todo.id}`} todo={todo}/>
            )) : <Box>No todos</Box>}
       </Box>
    )
}