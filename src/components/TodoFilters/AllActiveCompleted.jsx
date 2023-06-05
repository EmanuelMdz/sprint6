import React from "react";

export const AllActiveCompleted = ({
  todoList,
  setTodoList,
  setFilter,
  All,
  Active,
  Complete,
}) => {
  return (
    <div className="second">
      <div className="all" onClick={All}>
        All
      </div>
      <div onClick={Active}>Active</div>
      <div onClick={Complete}>Completed</div>
    </div>
  );
};
