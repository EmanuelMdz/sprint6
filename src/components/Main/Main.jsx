import React, { useEffect } from "react";
import "./Main.css";
import { Input, px } from "@mantine/core";
import { IconCircle } from "@tabler/icons-react";
import { v4 as uuidv4 } from "uuid";

export const Main = ({
  todoList, // ArrayEntero
  setTodoList,
  input, // Valor del texto
  setInput,
  theme, // Tema "sun "moon"
  setTheme,
}) => {
  {
    /* ------------CUANDO CAMBIA EL IMPUT // seteo con el target------------ */
  }
  const onInputChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  {
    /* ------------CUANDO ENVIO EL FORM // seteo el array ------------ */
  }
  const onInputSumit = (e) => {
    e.preventDefault();
    setTodoList([
      ...todoList,
      { id: uuidv4(), text: input, completed: false, position: 0 },
    ]);
    setInput("");
    console.log(todoList); //console log del array ?¡
  };
  return (
    // -----------INPUT-------------/*
    <form onSubmit={onInputSumit}>
      <div className={`container_input`}>
        <div className="div_input">
          <Input
            icon={<IconCircle size="20px" />}
            placeholder="Create a new to do..."
            onChange={onInputChange}
          />
        </div>
      </div>
      {/* ------------DIBUJO DE LISTA------------ */}
      <div className="conteiner_todolist">
        <ul>
          {todoList.map((todo, i) => {
            return (
              <li className="todo_list" key={todo.id}>
                <input type="checkbox" className="checbox_style" />
                {todo.text}
              </li>
            );
          })}
          {/* ------------PIE DE LISTA------------ */}
          <li className="todo_list bottom">
            <div className="first">Items Left</div>
            <div className="second">All active Completed</div>
            <div className="third">Clear Completed</div>
          </li>
        </ul>
        <a className="draganddrop" href="">
          Drag and drop to reorder list
        </a>
      </div>
    </form>
  );
};
