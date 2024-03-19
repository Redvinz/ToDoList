import React from "react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ itemList, onDelete }) => {
  return (
    <div className="todo">
      <div className="todo-item">
        <input type="checkbox" checked={itemList.isChecked} readOnly />
        <span style={{ fontFamily: "Inter", fontWeight: "500" }}>
          {itemList.quantity + " " + itemList.name}
        </span>
      </div>
      <button className="trashbin" onClick={() => onDelete(itemList.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
