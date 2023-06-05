import React, { useState } from "react";

export const ClearCompleted = ({ todoList, setTodoList, clearCompleted }) => {
  return (
    <div onClick={clearCompleted} className="third">
      ClearCompleted
    </div>
  );
};
