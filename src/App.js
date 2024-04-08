import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
    console.log(items);
  }

  function handleDeleteItem(itemId) {
    setItems((items) => items.filter((item) => item.id !== itemId));
  }

  function handleClearItems() {
    setItems([]);
  }

  function handleCheck(itemId, isChecked) {
    setItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, isChecked: isChecked } : item
      )
    );
  }

  const completionPercentage =
    items.length > 0
      ? (
          (items.filter((item) => item.isChecked).length / items.length) *
          100
        ).toFixed(2)
      : 0;

  return (
    <div className="container">
      <div className="card">
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "20px",
            fontFamily: "Slackside One",
            fontWeight: "700",
          }}
        >
          TO DO LIST
        </h1>
        <p>Double click to edit</p>
        <TodoForm onAddItem={handleAddItem} />
        <p>You have completed {completionPercentage}% of your tasks!</p>
        <TodoList items={items} onDelete={handleDeleteItem} onCheck={handleCheck} />
        <button onClick={handleClearItems} className="clear">
          Clear All
        </button>
      </div>
    </div>
  );
}

export default App;
