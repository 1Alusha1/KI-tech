import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reason from "./components/Resons";
import HowWorks from "./components/HowWorks";
import ThemeSwitcher from "./components/ThemeSwitcher";
import hamburger from "./assets/img/hamburger.png";
import generalStore from "./store/store";

const Burger = styled.div`
  display: none;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 4;
  top: 20px;
  right: 80px;
  width: 45.5px;
  height: 45.5px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  box-shadow: var(--shadow);
  transition: all 0.2s ease;
  background: #fff;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  img {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 768px) {
    display: flex;
    top: 13px;
  }

  @media (max-width: 425px) {
    top: 20px;
    right: 65px;
    width: 35px;
    height: 35px;

    img {
      width: 15px;
      height: 15px;
    }
  }
`;
export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 30px;
`;

function App() {
  const { toggleMenu } = generalStore();
  return (
    <>
      <ThemeSwitcher />
      <Burger onClick={toggleMenu}>
        <img src={hamburger} alt="menu button" />
      </Burger>
      <Header />
      <Hero />
      <Container>
        <Works />
      </Container>

      <About />

      <Reason />
      <HowWorks />
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
