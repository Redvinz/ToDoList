import React, { useState } from "react";

function TodoForm({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [filter, setFilter] = useState("all");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name) return;

    const newItem = { name, quantity, id: Date.now(), isChecked: false };
    console.log(newItem);

    setName("");
    setQuantity(1);
    onAddItem(newItem);
  }
  return (
    <div id="form">
      <form onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          style={{ width: "50px", height: "40px" }}
        >
          {/* <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option> */}

          {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          className="darker-input"
          type="text"
          placeholder="Add a task"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ width: "300px" }}
        />
        <button type="submit" className="todo-btn darker-button">
          Add
        </button>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{ height: "40px" }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="incomplete">Incomplete</option>
        </select>
      </form>
    </div>
  );
}

export default TodoForm;
