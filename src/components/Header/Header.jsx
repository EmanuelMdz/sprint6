import React from "react";
import "./Header.css";

const Header = ({ themeProp, setThemeProp }) => {
  return (
    <div className={`div_header ${themeProp}`}>
      <h1>T O D O</h1>
      <div className="boton_day_night">
        <button
          onClick={() => setThemeProp(themeProp === "sun" ? "moon" : "sun")}
        >
          <img src={`/images/icon-${themeProp}.svg`} alt="" />
        </button>
      </div>
    </div>
  );
};
export default Header;
