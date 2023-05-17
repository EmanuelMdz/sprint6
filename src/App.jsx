import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const [theme, setTheme] = useState("sun");

  return (
    <>
      <Header theme={theme} setTheme={setTheme} />
    </>
  );
}

export default App;
