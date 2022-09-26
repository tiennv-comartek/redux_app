import React, { useState } from "react";
import { FormControl,Flex,Input,Button } from '@chakra-ui/react';
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

export const AddTodo = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleInput = e => {
        e.preventDefault();
        setValue(e.target.value);
    }
    const handleSubmit = e => {
        e.preventDefault();
          dispatch(addTodo(value));
        setValue('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                    <Input type="text" value={value} onChange={handleInput}/>
                </FormControl>
                <Button type="sumbit" disabled={!value}>Add</Button>
            </Flex>
        </form>
    )
}