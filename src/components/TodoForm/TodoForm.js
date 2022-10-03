import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';
import { Button, TextField } from '@material-ui/core'


function  TodoForm({ addTodo }) {

    const [todo, setTodo] = useState({
        id: "",
        completed: false,
        task: ""
    })

    function inputChangeEvent(e) {
        setTodo({ ...todo, task: e.target.value })
    }

    function submitEvent(e) {
        console.log("hello");
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({ ...todo, id: uuidv4() })
        }

        setTodo({...todo, task:""});
    }
    
    return (
        <form onSubmit={submitEvent}>
            <TextField
                className="inputbox"
                label="Task" 
                name="task"
                type="text"
                value={todo.task}
                onChange={inputChangeEvent}>
            </TextField>
            <Button type="submit">Submit</Button>
        </form>
    );
}

export default TodoForm;