import React, { useState } from "react";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../Css/Inputlist/Inputlist.css";

function Inputlist({ item, index, onClick, onEdit, onUpdate }) {
  const [editText, setEditText] = useState(item.title);
  const handleSave = () => {
    onUpdate(item.id, editText, index);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: item.color,
        padding: "5px",
        margin: "5px ",
        color: "white",
      }}
      key={item.title}
    >
      {item.isEdit ? (
        <input
          className="todo-input"
          type="text"
          value={editText}
          onChange={(event) => {
            setEditText(event.target.value);
          }}
        />
      ) : (
        <li>{item.title} </li>
      )}

      <button
        className="delete"
        onClick={() => {
          onClick(item.title);
        }}
      >
        <i class="fa-solid fa-trash"></i>
      </button>
      <button
        onClick={() => {
          if (item.show) {
            handleSave();
          } else {
            onEdit(item.id);
          }
        }}
      >
        {item.isEdit ? (
          <i class="fa-solid fa-bookmark"></i>
        ) : (
          <i class="fa-solid fa-pen-to-square"></i>
        )}
        {/* if show */}
      </button>
    </div>
  );
}

export default Inputlist;
