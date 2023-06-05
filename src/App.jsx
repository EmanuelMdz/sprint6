import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App() {
  {
    /* ------------Declaro estados------------ */
  }
  const [input, setInput] = useState("");
  const [theme, setTheme] = useState("sun");
  const [todoList, setTodoList] = useState([]);
  const [completedTask, setCompletedTask] = useState(false);
  const [filter, setFilter] = useState("All");
  const [todoListFiltered, settodoListFiltered] = useState([]);
  // UseEffect para remover clases
  useEffect(() => {
    theme === "sun"
      ? document.body.classList.remove("moon")
      : document.body.classList.add("moon");
  }, [theme]);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} todoList={todoList} />
      <Main
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
        theme={theme}
        setTheme={setTheme}
        completedTask={completedTask}
        setCompletedTask={setCompletedTask}
        filter={filter}
        setFilter={setFilter}
        todoListFiltered={todoListFiltered}
        settodoListFiltered={settodoListFiltered}
      ></Main>
    </>
  );
}

export default App;
