import React from "react";
import "./Header.css";

const Header = ({ theme, setTheme }) => {
  return (
    <>
      <div className={`div_header ${theme}`}>
        <h1>TODO</h1>
        <div className="boton_day_night">
          {/* ------------Set del theme------------ */}
          <button onClick={() => setTheme(theme === "sun" ? "moon" : "sun")}>
            <img src={`/images/icon-${theme}.svg`} alt="" />
          </button>
        </div>
        <div className="p">
          {" "}
          <p>
            Full Stack Developer Bootcamp Coded by<a href="">Angopupyry</a>
          </p>
        </div>
      </div>
    </>
  );
};
export default Header;
