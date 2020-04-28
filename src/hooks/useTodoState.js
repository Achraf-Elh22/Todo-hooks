import { useState } from 'react';
import { v4 as uuid } from 'uuid';

export default (intialTodos) => {
  const [todos, setTodos] = useState(intialTodos);

  return {
    todos,
    addTodo: (newTodoText) =>
      setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]),
    removeTodo: (todoId) => {
      const updatedTodo = todos.filter((todo) => todo.id !== todoId);
      setTodos(updatedTodo);
    },
    toggleTodo: (todoId) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(updatedTodo);
    },
    editTodo: (todoId, newTask) => {
      const updatedTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, task: newTask } : todo
      );
      setTodos(updatedTodo);
    },
  };
};
