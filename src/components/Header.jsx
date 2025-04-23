import styled, { css } from "styled-components";
import img3 from "../assets/img/logo.png";
import generalStore from "../store/store";

const HeaderElem = styled.header`
  background-color: rgba(99, 27, 27, 0);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  border-radius: 16px;
  margin: 1rem auto;
  max-width: 1200px;
  box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.1);
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  margin: 0;
  width: 92%;

  ${({ theme }) =>
    theme === "light"
      ? css`
          background: rgba(255, 255, 255, 0.15);
        `
      : css`
          background: rgba(15, 23, 42, 0.75);
        `}

  @media (max-width: 1200px) {
    max-width: 90%;
  }

  @media (max-width: 768px) {
    border-radius: 0;
    width: 100%;
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
          box-shadow: 0 0 20px 5px rgba(255, 255, 255, 0.1);
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
    gap: ${({ burger }) => burger && "30px"};
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 100px;
  height: 50px;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    z-index: 3;
    width: 80px;
    height: 40px;
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
            color: #0f172a;
          }
        `
      : css`
          li {
            color: #f1f5f9;
          }
        `}
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  z-index: 3;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 25px;

    ${({ burger }) =>
      burger
        ? css`
            height: 250px;
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
  font-size: 1.05rem;
  font-weight: 500;
  list-style: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  padding: 5px 0;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: var(--accent-color);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.5s ease;
  }
  
  &:hover {
    color: var(--accent-color);
  }
  
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
  }
`;

const GetStartedButton = styled.button`
  background: linear-gradient(135deg, #7e22ce, #a855f7, #c026d3);
  background-size: 200% auto;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: 600;
  font-size: 1.05rem;
  box-shadow: 0 4px 15px rgba(126, 34, 206, 0.3);
  cursor: pointer;
  border-radius: 12px;
  transition: all 0.5s ease;
  position: relative;
  overflow: hidden;
  z-index: 3;
  
  &:hover {
    background-position: right center;
    box-shadow: 0 8px 20px rgba(126, 34, 206, 0.4);
    transform: translateY(-3px);
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
            <img src={img3} alt="KI-Tech Logo" />
          </Logo>
        </LogoContainer>
        <Nav theme={theme}>
          <List burger={burger}>
            <Li onClick={() => scrollToSection("works")}>Services</Li>
            <Li onClick={() => scrollToSection("about")}>About</Li>
            <Li onClick={() => scrollToSection("contact")}>Contact</Li>
          </List>
        </Nav>
        <GetStartedButton 
          theme={theme} 
          burger={burger} 
          onClick={() => scrollToSection("contact")}
        >
          Start Project
        </GetStartedButton>
      </HeaderContent>
    </HeaderElem>
  );
};

export default Header;
