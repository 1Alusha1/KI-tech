import styled from "styled-components";
import { GradientBackground, Headline, Highlight } from "./Hero";
import { FaTelegram, FaWhatsapp, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import generalStore from "../store/store";

const Header2 = styled.h2`
  margin: 0 auto;
  margin-bottom: 60px;
  width: 65%;
  text-align: center;
  font-size: 3.5rem;
  font-weight: 500;
  font-family: "Krona One", sans-serif;
  color: white;
  line-height: 1.3;

  @media (max-width: 768px) {
    & {
      width: 90%;
      font-size: 2.5rem;
    }
  }
  @media (max-width: 425px) {
    & {
      width: 100%;
      margin-bottom: 30px;
      font-size: 2rem;
    }
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 40px;
  max-width: 600px;
  margin: 0 auto;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  border-radius: 12px;
  padding: 16px 20px;
  transition: all 0.3s ease;
  text-decoration: none;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    text-decoration: none;
    color: white;
  }
`;

const IconWrapper = styled.div`
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
  opacity: 0.8;
`;

const ContactValue = styled.span`
  font-size: 1.1rem;
  font-weight: 500;
`;

const Contact = () => {
  const { theme } = generalStore();
  
  return (
    <GradientBackground
      style={{ textAlign: "center", marginBottom: "40px", padding: "60px 20px" }}
      id="contact"
    >
      <Header2>
        Ready to start automating your business?
      </Header2>
      <Headline style={{ fontSize: '2rem', marginBottom: '40px' }}>
        Contact us through any convenient channel
      </Headline>
      
      <ContactGrid>
        <ContactCard href="mailto:killhome2000@gmail.com">
          <IconWrapper>
            <FaEnvelope />
          </IconWrapper>
          <ContactInfo>
            <ContactLabel>Email</ContactLabel>
            <ContactValue>killhome2000@gmail.com</ContactValue>
          </ContactInfo>
        </ContactCard>
        
        <ContactCard href="tel:+79001234567">
          <IconWrapper>
            <FaPhoneAlt />
          </IconWrapper>
          <ContactInfo>
            <ContactLabel>Phone</ContactLabel>
            <ContactValue>+7 (900) 123-45-67</ContactValue>
          </ContactInfo>
        </ContactCard>
        
        <ContactCard href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FaTelegram />
          </IconWrapper>
          <ContactInfo>
            <ContactLabel>Telegram</ContactLabel>
            <ContactValue>@kitech_support</ContactValue>
          </ContactInfo>
        </ContactCard>
        
        <ContactCard href="https://wa.me/79001234567" target="_blank" rel="noopener noreferrer">
          <IconWrapper>
            <FaWhatsapp />
          </IconWrapper>
          <ContactInfo>
            <ContactLabel>WhatsApp</ContactLabel>
            <ContactValue>+7 (900) 123-45-67</ContactValue>
          </ContactInfo>
        </ContactCard>
      </ContactGrid>
    </GradientBackground>
  );
};

export default Contact;
