// App.js
// import React, { useState } from 'react';
// import TodoForm from './TodoForm';
// import TodoList from './TodoList';

// const App = () => {
//   const [todos, setTodos] = useState([]);

//   const handleAddTodo = (text) => {
//     setTodos(prevTodos => [
//       ...prevTodos,
//       { id: Date.now(), text, completed: false },
//     ]);
//   };

//   const handleDeleteTodo = (id) => {
//     setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
//   };

//   return (
//     <div className="card">
//       <h1>React To-Do List</h1>
//       <TodoForm onAdd={handleAddTodo} />
//       <TodoList todos={todos} onDelete={handleDeleteTodo} />
//     </div>
//   );
// };


import React from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import {useState} from "react";

function App() {
  const [items, setItems] = useState([]); 

  function handleAddItem(item){
    setItems(items=>[...items, item])
    console.log(items)
  }

  return (
    <div className='card'>
      <TodoForm onAddItem={handleAddItem} />
      <TodoList items={items}/>
    </div>
  );
}

export default App;