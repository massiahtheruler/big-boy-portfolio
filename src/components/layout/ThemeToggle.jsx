function ThemeToggle({ theme, onToggleTheme }) {
  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      onClick={onToggleTheme}
    >
      <span className="theme-toggle__orb" />
      <span className="theme-toggle__label">
        {theme === "dark" ? "Light mode" : "Dark mode"}
      </span>
    </button>
  );
}

export default ThemeToggle;
