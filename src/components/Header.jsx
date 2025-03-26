import { useEffect, useRef } from "react";
import styled from "styled-components";
import { Container } from "../App";
import img3 from "../assets/img/logo.png";

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
  z-index: 1000;
  margin: 0;
  width: 100%;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 80px;
  height: 40px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 0 2rem;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const Li = styled.li`
  font-size: 1rem;
  list-style: none;
  var(--text-primary);
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

  &:hover {
    var(--text-primary);
  }

  &:hover::before {
    width: 300%; /* Увеличиваем ширину для эффекта перелива */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #ff6a00, #ffcc00, #00c6ff, #ff00d8);
    transition: all 4.5s ease;
    box-shadow: 0 0 10px 5px rgba(255, 0, 216, 0.66);
    z-index: -1; 
  }

  &:focus {
    outline: none;
  }
`;


const Header = () => {
  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <HeaderElem id="home">
      <HeaderContent>
        <LogoContainer>
          <Logo>
            <img 
              src={img3} 
              alt="KI Tech Logo" 
            />
          </Logo>
        </LogoContainer>
        <Nav>
          <List>
            <Li onClick={() => scrollToSection("blog")}>Work</Li>
            <Li onClick={() => scrollToSection("cases")}>About</Li>
            <Li onClick={() => scrollToSection("tutorials")}>Contact</Li>
          </List>
        </Nav>
        
        <GetStartedButton>Get Started</GetStartedButton>
      </HeaderContent>
    </HeaderElem>
  );
};

export default Header;