import React, { useState } from "react";

export const ClearCompleted = ({ todoList, setTodoList }) => {
  const clearCompleted = () => {
    const tareas = [...todoList];
    const tareasNoCompletadas = tareas.filter(
      (tareaCompletada) => tareaCompletada.isCompleted === false
    );
    setTodoList(tareasNoCompletadas);
  };

  return (
    <div onClick={clearCompleted} className="third">
      ClearCompleted
    </div>
  );
};
