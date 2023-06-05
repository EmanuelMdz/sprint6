import React from "react";
import "./TodoFilters.css";
import { ItemsLeft } from "./ItemsLeft";
import { AllActiveCompleted } from "./AllActiveCompleted";
import { ClearCompleted } from "./ClearCompleted";
export const TodoFilters = ({
  todoList,
  setTodoList,
  setFilter,
  filter,
  All,
  Active,
  Complete,
  clearCompleted,
}) => {
  return (
    <div className="div_bottom">
      <ItemsLeft todoList={todoList} setTodoList={setTodoList} />
      <AllActiveCompleted
        todoList={todoList}
        setTodoList={setTodoList}
        setFilter={setFilter}
        filter={filter}
        All={All}
        Active={Active}
        Complete={Complete}
      />
      <ClearCompleted
        todoList={todoList}
        setTodoList={setTodoList}
        clearCompleted={clearCompleted}
      />
    </div>
  );
};
