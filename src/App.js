import { useState } from 'react';
import './App.css';
import TodoLists from './Components/TodoLists/TodoLists';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Sample Todo 1', completed: false },
    { id: 2, text: 'Sample Todo 2', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  // ✅ Add todo
  const addTodo = () => {
    if (newTodo.trim() === '') return;

    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
    };

    setTodos([...todos, newItem]);
    setNewTodo('');
  };

  // ✅ Remove todo
  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // ✅ Toggle complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  //Clear All todos
  const clearAll = () => {
    if (todos.length === 0) return; // No todos to clear
    const confirmClear = window.confirm('Are you sure you want to clear all todos?');
    if (!confirmClear) return;
      setTodos([]);
      
    
  };

  //✅  Add todo on Enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); // prevents newline in textarea
      addTodo();
    }
  };

  // ✅ Correct return (top-level)
  return (
    <div className="container">
      <h2>Todo List</h2>
      <div className="input-field">
        <textarea
          placeholder="Enter your new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          onKeyDown={handleKeyDown} // handle Enter key press
        ></textarea>
        <i className="uil uil-notes note-icon" 
        onClick={addTodo}
        title='Add Todo'
        ></i>
      </div>

      <TodoLists
        todos={todos}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
        clearAll={clearAll}
      />
      

    </div>
  );
}

export default App;
