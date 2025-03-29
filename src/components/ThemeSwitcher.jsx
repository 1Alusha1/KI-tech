import generalStore from "../store/store";
import styled from "styled-components";

const SwitchButton = styled.button`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 999;
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--shadow);
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    top: 13px;
  }
  @media (max-width: 425px) {
    top: 20px;
    width: 35px;
    height: 35px;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;

const ThemeSwitcher = () => {
  const { theme, switchTheme } = generalStore();

  const changeTheme = () => {
    if (theme === "dark") {
      switchTheme("light");
      return (window.document.body.style.background = "#fff");
    }
    switchTheme("dark");
    return (window.document.body.style.background = "var(--dark-bg-primary)");
  };

  return (
    <SwitchButton className="theme-switch" onClick={changeTheme}>
      {theme === "light" ? "🌙" : "☀️"}
    </SwitchButton>
  );
};

export default ThemeSwitcher;
