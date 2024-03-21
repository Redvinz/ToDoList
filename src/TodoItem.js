import React from 'react';
import { FaTrash } from 'react-icons/fa';

const TodoItem = ({ itemList, onDelete }) => {
  return (
    <div className='todo darker-todo'>

      <input type="checkbox" checked={itemList.isChecked} readOnly />     {itemList.quantity + " " + itemList.name}

      
      <button className="trashbin" onClick={() => onDelete(itemList.id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default TodoItem;
