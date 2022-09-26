import React, { useEffect, useState } from "react";
import { Checkbox,Box,Text } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { toggleTodo } from "../redux/actions";

export const Todo = ({ todo }) => {
      const dispatch = useDispatch();
    const [check, setChecked] = useState(false);

    const handleChecked = () => dispatch(toggleTodo(todo.id));   
    useEffect(() => {
      setChecked(todo.completed)
    },[todo])
    return (
        <Box>
            <Checkbox onChange={handleChecked} checked={check}>
                <Text as={todo.completed && 'del'}>{todo.content}</Text>
            </Checkbox>
       </Box>
    )
}