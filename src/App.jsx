import styled from "styled-components";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Works from "./components/Works";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reason from "./components/Resons";
import HowWorks from "./components/HowWorks";
import ThemeSwitcher from './components/ThemeSwitcher'

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 15px;
  margin-top: 30px;
`;

function App() {
  return (
    <>
      <ThemeSwitcher />
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
