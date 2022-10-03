import React from 'react';
import Todo from "../Todo/Todo";

function TodoList( {todoList, toggleComplete, deleteTodo} ) {
    return (
        <ul>
            {todoList.map(todo => (
                <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} deleteTodo={deleteTodo}></Todo>
            ))}
        </ul>
    )
}

export default TodoList