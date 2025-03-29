import styled, { css } from "styled-components";
import img3 from "../assets/img/logo.png";
import generalStore from "../store/store";

const HeaderElem = styled.header`
  background-color: rgba(99, 27, 27, 0);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 15px;
  margin: 1rem auto;
  max-width: 1024px;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.15);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  margin: 0;
  width: 100%;

  ${({ theme }) =>
    theme === "light"
      ? css`
          background: #ffffff24;
        `
      : css`
          background: #00000036;
        `}

  @media (max-width: 1024px) {
    max-width: 768px;
  }

  @media (max-width: 768px) {
    border-radius: 0px;
    height: ${({ burger }) => burger && "100%"};
    ${({ burger }) =>
      burger &&
      css`
        &::before {
          position: absolute;
          content: "";
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(99, 27, 27, 0);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.15);
          z-index: 1;
        }
      `}
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: ${({ burger }) => burger && "20px"};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 40px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    z-index: 3;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 2rem;

  ${({ theme }) =>
    theme === "light"
      ? css`
          li {
            color: #000;
          }
        `
      : css`
          li {
            color: #fff;
          }
        `}
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;

    ${({ burger }) =>
      burger
        ? css`
            height: 200px;
            transition: 0.5s;
            overflow: hidden;
          `
        : css`
            height: 0px;
            transition: 0.5s;
            overflow: hidden;
          `}
  }
`;

const Li = styled.li`
  font-size: 1rem;
  list-style: none;
  /* var(--text-primary); */
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--accent-color);
  }
`;

const GetStartedButton = styled.button`
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid #333;
  padding: 0.5rem 1.25rem;
  font-weight: 300;
  font-size: 1rem;
  box-shadow: 0 0 10px 5px rgba(102, 100, 102, 0.16);
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative; /* Для создания анимации */
  overflow: hidden; /* Чтобы градиент не выходил за пределы кнопки */
  z-index: 3;
  ${({ theme }) =>
    theme === "light"
      ? css`
          color: #000;
        `
      : css`
          color: #fff;
        `}

  &:hover {
    /* var(--text-primary); */
  }

  &:hover::before {
    left: 0;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -170px;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff6a00, #ffcc00, #00c6ff, #ff00d8);
    transition: all 2s ease;
    box-shadow: 0 0 10px 5px rgba(255, 0, 216, 0.66);
    z-index: -1;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: ${({ burger }) => (burger ? "block" : "none")};
  }
`;

const Header = () => {
  const { theme, burger, toggleMenu } = generalStore();
  const scrollToSection = (section) => {
    if (section !== "home") {
      toggleMenu();
    }
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderElem id="home" theme={theme} burger={burger}>
      <HeaderContent>
        <LogoContainer>
          <Logo onClick={() => scrollToSection("home")}>
            <img src={img3} alt="KI Tech Logo" />
          </Logo>
        </LogoContainer>
        <Nav theme={theme}>
          <List burger={burger}>
            <Li onClick={() => scrollToSection("works")}>Work</Li>
            <Li onClick={() => scrollToSection("about")}>About</Li>
            <Li onClick={() => scrollToSection("contact")}>Contact</Li>
          </List>
        </Nav>
        <GetStartedButton theme={theme} burger={burger}>
          Get Started
        </GetStartedButton>
      </HeaderContent>
    </HeaderElem>
  );
};

export default Header;
