// import React, { useState } from 'react'
import './TodoLists.css'
function TodoLists({todos, removeTodo, toggleComplete, clearAll}) {
   

    // const newTodo ={
    //   id: todos.length + 1,
    //   text: `Sample Todo ${todos.length + 1}`,
    //   completed: false
    // };
    // setTodos([...todos, newTodo]);

    // const removeTodo = () => {
    //     setTodos(todos.slice(0, -1));
    // }

  return (
    <>
{todos.length === 0 ? (
  <div className="pending-tasks">
    <span style={{ display: 'block', width: '100%', textAlign: 'center' }}>
      You have no tasks pending.
    </span>
  </div>
) : (
  <>
    <ul className="todoLists">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list${todo.completed ? ' completed' : ' pending'}`}
          onClick={() => toggleComplete(todo.id)}
        >
          <input type="checkbox" checked={todo.completed} readOnly />
          <span className="todo">{todo.text}</span>
          <i
            className="uil uil-trash delete"
            onClick={(e) => {
              e.stopPropagation();
              removeTodo(todo.id);
            }}
          ></i>
        </li>
      ))}
    </ul>

    {/* ✅ Moved out of the <ul> */}
    <div className="pending-tasks">
      <span>
        You have <b>{todos.length}</b> tasks pending.
      </span>
      <button
        className="clear-button"
        onClick={clearAll}
      >
        Clear All
      </button>
    </div>
  </>
)}

</>
        
);
}

export default TodoLists;





