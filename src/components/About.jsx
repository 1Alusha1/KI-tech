import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Container } from "../App";
import { Header2, Paragraph } from "./styles/CommonStyles";

import Certificate from "./Certificate";
import ApisExp from "./ApisExp";
import generalStore from "../store/store";

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
  
  @media (max-width: 768px) {
    padding: 100px 0;
  }
`;

const Content = styled.div`
  width: 65%;
  font-size: 1.2rem;
  line-height: 1.8;
  overflow: hidden;

  &.about {
    overflow: hidden;
  }

  @media (max-width: 1200px) {
    width: 70%;
  }

  @media (max-width: 1024px) {
    width: 100%;
    padding: 0 20px;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const AboutContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 50px;
  margin-top: 30px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 60px;
  margin-bottom: 120px;

  & {
    overflow-x: hidden;
  }

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    & {
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 80px;
    }
  }
  
  @media (max-width: 480px) {
    margin-bottom: 60px;
  }
`;

const ProfileImageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  
  @media (max-width: 1024px) {
    margin-top: 0;
    margin-bottom: 40px;
  }
`;

const ProfileImage = styled.div`
  width: 340px;
  height: 340px;
  border-radius: 50%;
  background-color: #e0e0e0;
  flex-shrink: 0;
  border: 8px solid #8ca6f3;
  position: relative;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0,0,0,0.15);
  
  &::after {
    content: 'Your Photo';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #666;
    font-size: 18px;
  }
  
  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
  }
  
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  
  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const ProfileCaption = styled.div`
  margin-top: 20px;
  font-size: 1.1rem;
  color: ${({ theme }) => theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
  font-weight: 500;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HighlightText = styled.span`
  color: #8ca6f3;
  font-weight: 500;
`;

const AboutHeader = styled(Header2)`
  font-size: 2.5rem;
  margin-bottom: 50px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 0;
    width: 100px;
    height: 4px;
    background: #8ca6f3;
    border-radius: 2px;
  }
  
  @media (max-width: 1200px) {
    font-size: 2.2rem;
  }
  
  @media (max-width: 1024px) {
    text-align: center;
    
    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 40px;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const AINote = styled.div`
  margin-top: 40px;
  padding: 20px 25px;
  background: rgba(140, 166, 243, 0.1);
  border-left: 4px solid #8ca6f3;
  border-radius: 8px;
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
  box-shadow: 0 5px 15px rgba(0,0,0,0.05);
  
  @media (max-width: 768px) {
    margin-top: 30px;
    padding: 15px 20px;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 24px;
  font-size: 1.2rem;
  line-height: 1.8;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 20px;
  }
`;

const About = () => {
  const { theme } = generalStore();

  return (
    <AboutSection id="about">
      {/* About me */}
      <AboutContainer>
        <Wrapper theme={theme}>
          <Content>
            <AboutHeader theme={theme}>About KI-Tech</AboutHeader>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <StyledParagraph theme={theme}>
                Our company specializes in developing <HighlightText>intelligent automated solutions</HighlightText> that help businesses optimize their workflows, reduce costs, and increase efficiency.
              </StyledParagraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <StyledParagraph theme={theme}>
                KI-Tech's story began with a simple idea: to help entrepreneurs <HighlightText>eliminate routine tasks</HighlightText> and focus on growing their business. When one of our clients, an e-commerce store owner, faced challenges managing marketing channels, we developed a custom solution that automated the setup of advertising campaigns, newsletters, and analytics.
              </StyledParagraph>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <StyledParagraph theme={theme}>
                Since then, we've continuously expanded our expertise in <HighlightText>marketing automation</HighlightText> and business process optimization, using platforms like Zapier, Make.com, HubSpot, and others. With each new project, we refine our approach, finding more effective and faster ways to solve problems. Over the past few years, we've successfully implemented <HighlightText>more than 100 projects</HighlightText> for companies across various industries.
              </StyledParagraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <StyledParagraph theme={theme}>
                Today, we offer comprehensive solutions for integrating <HighlightText>artificial intelligence</HighlightText> into business processes, implementing chatbots, automating document workflows, and marketing activities. Our technical specialists are certified by leading automation and AI solution platforms.
              </StyledParagraph>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <AINote theme={theme}>
                <strong>AI-powered development:</strong> This website was fully designed and developed using artificial intelligence technologies, showcasing our commitment to leveraging cutting-edge tools in our work. We practice what we preach by implementing AI solutions in our own business processes.
              </AINote>
            </motion.div>
          </Content>
          
          <ProfileImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ProfileImage />
            <ProfileCaption theme={theme}>
              Founder & CEO
            </ProfileCaption>
          </ProfileImageContainer>
        </Wrapper>
      </AboutContainer>

      {/* APIs worked */}
      <ApisExp />

      <Certificate />
    </AboutSection>
  );
};

export default About;
