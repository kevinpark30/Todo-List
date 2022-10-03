import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './TodoForm.css';

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
            <input
            className="inputbox" 
                name="task"
                type="text"
                value={todo.task}
                onChange={inputChangeEvent}>
            </input>
            <button type="submit">Submit</button>
        </form>
    );
}

export default TodoForm;