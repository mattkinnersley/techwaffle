import React from "react";
import cn from "classnames";

const ToggleButton = ({ theme, setTheme }) => {
  return (
    <div
      className={`ml-2 dark-toggle-button ${cn({
        darkMode: theme === "dark",
      })}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className={`dark-toggle-inner`}></div>
    </div>
  );
};

export default ToggleButton;
