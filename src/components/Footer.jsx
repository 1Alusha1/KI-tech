import styled from "styled-components";
import generalStore from "../store/store";

const FooterE = styled.footer`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
    padding-bottom: 20px;

    li {
      list-style: none;
      color: ${({ theme }) =>
        theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    ul {
      text-align: center;
    }
  }
`;

const Footer = () => {
  const { theme } = generalStore();

  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    window.scrollTo({
      top: targetElement.offsetTop,

      behavior: "smooth",
    });
  };

  return (
    <FooterE theme={theme}>
      <ul>
        <li onClick={() => scrollToSection("home")}>Home</li>
        <li onClick={() => scrollToSection("works")}>Work</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>
      </ul>
    </FooterE>
  );
};

export default Footer;
