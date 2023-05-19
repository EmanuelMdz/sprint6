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
  // UseEffect para remover clases
  useEffect(() => {
    theme === "sun"
      ? document.body.classList.remove("moon")
      : document.body.classList.add("moon");
  }, []);

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
      <Main
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
        theme={theme}
        setTheme={setTheme}
      ></Main>
    </>
  );
}

export default App;
