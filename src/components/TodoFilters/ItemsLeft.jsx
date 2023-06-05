import React from "react";

export const ItemsLeft = ({ todoList, setTodoList }) => {
  return <div className="third">{todoList.length} Items Left</div>;
};
