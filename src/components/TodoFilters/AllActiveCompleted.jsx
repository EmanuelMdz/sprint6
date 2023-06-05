import React from "react";

export const AllActiveCompleted = ({ todoList, setTodoList, setFilter }) => {
  return (
    <div className="second">
      <div
        className="all"
        onClick={() => {
          setFilter("All");
        }}
      >
        All
      </div>
      <div
        onClick={() => {
          setFilter("Active");
        }}
      >
        Active
      </div>
      <div
        onClick={() => {
          setFilter("Completed");
        }}
      >
        Completed
      </div>
    </div>
  );
};
