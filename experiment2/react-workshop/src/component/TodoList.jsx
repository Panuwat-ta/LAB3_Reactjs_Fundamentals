// src/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem'; // 🔽 Import

function TodoList({ todos, deleteTodo, toggleTodo, editTodo }) { // 🔽 รับ editTodo
  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo} // 🔽 ส่งต่อ editTodo
        />
      ))}
    </ul>
  );
}

export default TodoList;