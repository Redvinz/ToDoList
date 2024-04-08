// TodoList.js
import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ items, onDelete, onCheck }) {
  // const items = [
  //   { id: 1, quantity: "1", name: "Milk", isChecked: false },
  //   { id: 2, quantity: "2", name: "Coffee", isChecked: false },
  //   { id: 3, quantity: "3", name: "Sugar", isChecked: false },
  // ];

  // const handleDelete = (itemId) => {
  //   console.log(`Deleting item with ID: ${itemId}`);
  // };

  return (
    <div id="myUnOrdList">
      <ul className="todo-list">
        {items.map((item) => (
          <TodoItem
            itemList={item}
            key={item.id}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
