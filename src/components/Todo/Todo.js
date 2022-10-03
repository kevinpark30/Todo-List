import React from 'react'
import './Todo.css'
import { Checkbox, IconButton, ListItem, Typography} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'

function Todo({ todo, toggleComplete, deleteTodo }) {
    function checkboxClick() {
        toggleComplete(todo.id);
    }

    function removeClick() {
        deleteTodo(todo.id);
    }

    return (
        <ListItem style={{ display: "flex" }}>
            <Checkbox 
                className="checkbox"
                checked={todo.completed}
                type="checkbox"  
                onClick={checkboxClick}></Checkbox>
            <Typography 
                className="todo-text"
                variant="body1" 
                style={{ textDecoration: todo.completed ? "line-through" : null}}>
                {todo.task}
            </Typography>
            <IconButton onClick={removeClick}>
                <CloseIcon />
            </IconButton>
        </ListItem>
    );
}

export default Todo;