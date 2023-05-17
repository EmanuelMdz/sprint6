import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <div className={`div_header ${props.theme}`}>
      <h1>TODO</h1>
      <div className="boton_day_night">
        <button
          onClick={() => props.setTheme(props.theme === "sun" ? "moon" : "sun")}
        >
          <img src={`/images/icon-${props.theme}.svg`} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Header;
