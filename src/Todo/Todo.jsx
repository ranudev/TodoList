import React, { useState } from "react";
import Inputlist from "../Inputlist/Inputlist";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function Todo() {
  const [inputdata, setInputdata] = useState("");
  const [list, setList] = useState([]);

  const inputHandler = (event) => {
    setInputdata(event.target.value);
  };
  const addItem = () => {
    if (inputdata.trim()) {
      //   const todolist = [...list];
      const obj = {
        title: inputdata,
        isEdit: false,
        id: Math.random().toString(36).substr(2, 9),
        color: getRandomColor(),
      };
      console.log(inputdata);
      const todolist = [...list, obj];

      setList(todolist);
      setInputdata("");
      console.log("hello list");
    }
  };

  const onDelete = (index) => {
    const delitem = [...list];
    delitem.splice(index, 1);
    setList(delitem);
  };

  const onEditHandler = (id) => {
    const currrentList = [...list]; //previous data
    currrentList.map((item) => {
      if (item.id === id) {
        //inputdata(index)===clicked time index
        item.isEdit = !item.isEdit; //
      }
      return item;
    });
    setList(currrentList);
  };
  const updateHandler = (id, value, index) => {
    const currrentList = [...list];
    currrentList[index].title = value;
    currrentList[index].isEdit = false;
    currrentList.map((item) => {
      if (item.id === id) {
        item.title = value;
      }
      return item;
    });
    setList(currrentList);
  };

  return (
    <>
      <input
        type="text"
        className="input"
        placeholder="what is  your task today?"
        value={inputdata} //data come in input data variable
        onChange={inputHandler}
      />
      <button className="todo-btn" onClick={addItem}>
        Add items
      </button>
      <div>
        {list.map((item, index) => (
          <Inputlist
            key={item.id}
            item={item}
            index={index}
            onClick={onDelete}
            onEdit={onEditHandler}
            onUpdate={updateHandler}
          />
        ))}
      </div>
    </>
  );
}

export default Todo;
