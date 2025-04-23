import styled, { css } from "styled-components";
import generalStore from "../store/store";
import { FaTelegram, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const FooterE = styled.footer`
  padding: 40px 20px 20px;
  background-color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-bg-secondary)" : "var(--bg-secondary)"};
  border-top: 1px solid ${({ theme }) =>
    theme === "dark" ? "var(--dark-border-color)" : "var(--border-color)"};
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const FooterNav = styled.nav`
  margin-bottom: 30px;
  
  ul {
    display: flex;
    justify-content: center;
    gap: 32px;
    padding: 0;
    margin: 0;

    li {
      list-style: none;
      color: ${({ theme }) =>
        theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
      cursor: pointer;
      transition: color 0.3s ease;
      font-weight: 500;
      
      &:hover {
        color: var(--accent-color);
      }
    }
  }

  @media (max-width: 768px) {
    ul {
      flex-wrap: wrap;
      gap: 20px;
      justify-content: center;
    }
  }
  
  @media (max-width: 425px) {
    ul {
      flex-direction: column;
      align-items: center;
      gap: 15px;
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-border-color)" : "var(--border-color)"};
  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
  font-size: 18px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--accent-color);
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-secondary)" : "var(--text-secondary)"};
  font-size: 0.9rem;
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
      <FooterContent>
        <FooterNav theme={theme}>
          <ul>
            <li onClick={() => scrollToSection("home")}>Home</li>
            <li onClick={() => scrollToSection("works")}>Services</li>
            <li onClick={() => scrollToSection("about")}>About</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>
        </FooterNav>
        
        <SocialLinks>
          <SocialIcon 
            href="mailto:killhome2000@gmail.com" 
            theme={theme}
            aria-label="Email"
          >
            <FaEnvelope />
          </SocialIcon>
          <SocialIcon 
            href="https://t.me/your_telegram" 
            target="_blank" 
            rel="noopener noreferrer"
            theme={theme}
            aria-label="Telegram"
          >
            <FaTelegram />
          </SocialIcon>
          <SocialIcon 
            href="https://wa.me/79001234567" 
            target="_blank" 
            rel="noopener noreferrer"
            theme={theme}
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </SocialIcon>
        </SocialLinks>
        
        <Copyright theme={theme}>
          © {new Date().getFullYear()} KI-Tech. All rights reserved.
        </Copyright>
      </FooterContent>
    </FooterE>
  );
};

export default Footer;
