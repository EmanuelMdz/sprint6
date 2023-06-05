import React, { useEffect } from "react";
import "./Main.css";
import { useState } from "react";
import { Input, px } from "@mantine/core";
import { IconBrandNexo, IconCircle } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";
import { TodoFilters } from "../TodoFilters/TodoFilters";

export const Main = ({
  todoList, // ArrayEntero
  setTodoList,
  input, // Valor del texto
  setInput,
  theme, // Tema "sun "moon"
  setTheme,
  completedTask,
  setCompletedTask,
  filter,
  setFilter,
  settodoListFiltered,
  todoListFiltered,
}) => {
  {
    /* ------------CUANDO CAMBIA EL IMPUT // seteo con el target------------ */
  }
  // const [todoListFiltered, settodoListFiltered] = useState([]);

  const onInputChange = (e) => {
    setInput(e.target.value);
  };
  {
    /* ------------CUANDO ENVIO EL FORM // seteo el array ------------ */
  }
  const onInputSumit = (e) => {
    e.preventDefault();
    if (input != "") {
      const updatedList = [
        ...todoList,
        {
          id: uuidv4(),
          text: input,
          isCompleted: false,
          position: todoList.length + 1,
        },
      ];
      setTodoList(updatedList);
      settodoListFiltered(updatedList);
      setInput("");
    }
  };

  {
    /* ------------ELIMINAR TAREA ------------ */
  }
  const deleteTodo = (id) => {
    const newTodos = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodos);
    settodoListFiltered(newTodos);
  };
  {
    /* ------------COMPLETAR TAREA ------------ */
  }
  const completarTareas = (index) => {
    const tareas = [...todoList];
    const tarea = tareas[index];
    const isCompleted = tarea.isCompleted;
    const updatedTarea = { ...tarea, isCompleted: !isCompleted };
    tareas[index] = updatedTarea;
    setTodoList(tareas);
    setCompletedTask(updatedTarea.isCompleted);
    settodoListFiltered(tareas);
  };

  {
    /* ------------CLEAR  COMPLETE ------------ */
  }
  const clearCompleted = () => {
    const tareas = [...todoList];
    const tareasCompletadas = tareas.filter(
      (tareaCompletada) => tareaCompletada.isCompleted === false
    );
    settodoListFiltered(tareasCompletadas);
    setTodoList(tareasCompletadas);
  };

  const All = () => {
    settodoListFiltered(todoList);
  };
  const Active = () => {
    const ListFiltered = todoList.filter(
      (tarea) => tarea.isCompleted === false
    );

    settodoListFiltered(ListFiltered);
  };
  const Complete = () => {
    settodoListFiltered(todoList.filter((tarea) => tarea.isCompleted === true));
  };

  return (
    // -----------INPUT-------------/*
    <form onSubmit={onInputSumit}>
      <div className={`container_input`}>
        <div className={`div_input`}>
          <Input
            className={theme}
            icon={<IconCircle size="20px" />}
            placeholder="Create a new to do..."
            onChange={onInputChange}
            value={input}
          />
        </div>
      </div>
      {/* ------------DIBUJO DE LISTA------------ */}
      <div className="conteiner_todolist">
        <ul>
          {todoListFiltered.map((todo, index) => {
            return (
              <div key={todo.id}>
                <li className={`todo_list ${theme}`} key={todo.id}>
                  <label htmlFor="">
                    <input
                      type="checkbox"
                      checked={todo.isCompleted}
                      onChange={() => {
                        completarTareas(index);
                      }}
                      className="checbox_style"
                    />
                    <div
                      className={`text ${todo.isCompleted ? "completed" : ""}`}
                    >
                      {" "}
                      {todo.text}
                    </div>
                  </label>
                  <div>
                    <button
                      type="button"
                      className="button_delete"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      x
                    </button>
                  </div>
                </li>
              </div>
            );
          })}
          {/* ------------PIE DE LISTA------------ */}
          {todoList.length >= 1 && (
            <li className={`todo_list bottom ${theme}`}>
              <TodoFilters
                todoList={todoList}
                setTodoList={setTodoList}
                filter={filter}
                setFilter={setFilter}
                All={All}
                Active={Active}
                Complete={Complete}
                clearCompleted={clearCompleted}
              ></TodoFilters>
            </li>
          )}
        </ul>
        {todoList.length >= 1 && (
          <a className="draganddrop" href="">
            Drag and drop to reorder list
          </a>
        )}
      </div>
    </form>
  );
};

// let tareas = todoList;
// let tarea = tareas[index];
// tarea.isCompleted = tarea.isCompleted === false ? true : false;
// tareas[index] = tarea;
// setTodoList(tareas);
// console.log(tarea.isCompleted);
