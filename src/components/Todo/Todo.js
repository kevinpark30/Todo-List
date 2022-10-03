import React from 'react'
import './Todo.css'

function Todo({ todo, toggleComplete, deleteTodo }) {
    function checkboxClick() {
        toggleComplete(todo.id);
    }

    function removeClick() {
        deleteTodo(todo.id);
    }

    return (
        <div className="todo-item">
            <input type="checkbox" className="checkbox" onClick={checkboxClick}></input>
            <li className="todo-text" style={{
                textDecoration: todo.completed ? "line-through" : null
            }}>{todo.task}</li>
            <button onClick={removeClick}>X</button>
        </div>
    );
}

export default Todo;