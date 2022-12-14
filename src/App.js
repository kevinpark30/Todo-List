import React, { useState, useEffect} from 'react';
import './App.css';
import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';
import { Typography } from '@material-ui/core';

const LOCAL_STORAGE_KEY = "todo-list-todos"

function App() {
  const [todoList, setTodoList] = useState(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    return storedTodos || [];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todoList));
  }, [todoList]);


  function addTodo(todo) {
    setTodoList([todo, ...todoList]);
  }

  function toggleComplete(id) {
    setTodoList(
      todoList.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
          completed: !todo.completed
          };
        }

        return todo;
      })
    )
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter(todo => todo.id !== id))
  }

  return (
    <div className="App">
      <Typography style={{padding: 16}} variant="h1">
        Todo List
      </Typography>  
        <TodoForm addTodo={addTodo}></TodoForm>
        <TodoList todoList={todoList} toggleComplete={toggleComplete} deleteTodo={deleteTodo}></TodoList>
    </div>
  );
}

export default App;
