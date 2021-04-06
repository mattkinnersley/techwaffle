const ToggleButton = ({ theme, setTheme }) => {
  return (
    <button
      className={`ml-2 dark-toggle-button`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className={`dark-toggle-inner`}></div>
    </button>
  );
};

export default ToggleButton;
