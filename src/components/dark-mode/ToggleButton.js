const ToggleButton = ({ theme, setTheme }) => {
  return (
    <div
      className={`ml-2 dark-toggle-button`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <div className={`dark-toggle-inner`}></div>
    </div>
  );
};

export default ToggleButton;
