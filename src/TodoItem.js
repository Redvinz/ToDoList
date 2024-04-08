import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";

const TodoItem = ({ itemList, onDelete, onCheck }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(itemList.name);

  const handleCheck = () => {
    onCheck(itemList.id, !itemList.isChecked);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited name
    itemList.name = editedName;
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setEditedName(e.target.value);
  };

  return (
    <div className="todo">
      <div className="todo-item">
        <input
          type="checkbox"
          checked={itemList.isChecked}
          onChange={handleCheck}
          style={{ marginLeft: "30px" }}
        />
        {isEditing ? (
          <input
            type="text"
            value={editedName}
            onChange={handleChange}
            autoFocus
            onBlur={handleSave}
          />
        ) : (
          <span
            style={{ fontFamily: "Inter", fontWeight: "500", marginLeft: "10px" }}
            onDoubleClick={handleEdit}
          >
            {itemList.quantity + " " + itemList.name}
          </span>
        )}
      </div>
      <div className="button-container">
        <button className="trashbin" onClick={() => onDelete(itemList.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
