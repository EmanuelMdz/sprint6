import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState("sun");
  useEffect(() => {
    theme === "sun"
      ? document.body.classList.remove("moon")
      : document.body.classList.add("moon");
  }, []);

  return (
    <>
      <Header themeProp={theme} setThemeProp={setTheme} />
    </>
  );
}

export default App;
