import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { Container } from "../App";

import Certificate from "./Certificate";
import ApisExp from "./ApisExp";
import generalStore from "../store/store";

const AboutSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 150px 0;
`;

const Content = styled.div`
  width: 100%;
  font-size: 28px;
  overflow: hidden;

  &.about {
    overflow: hidden;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 32px;
  letter-spacing: 3px;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
`;

export const Header2 = styled.h2`
  width: 50%;
  font-size: 30px;
  font-weight: 400;
  font-family: "Krona One", sans-serif;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
    
  span {
    color: #dfc7b1;
  }

  ${({ fullwidth }) =>
    fullwidth
      ? css`
          width: 100%;
          text-align: center;
        `
      : ""};

  @media (max-width: 768px) {
    & {
      margin-bottom: 10px;
      width: 100%;
      text-align: center;
    }
  }
`;

const Wrapper = styled.div`
  display: flex;

  li {
    list-style: none;
  }

  & .flex {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  & {
    overflow-x: hidden;
    margin-bottom: 200px;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
    }
    & li {
      text-align: center;
    }
    & {
      width: 100%;
      text-align: justify;
    }
  }
`;

const About = () => {
  const { theme } = generalStore();

  return (
    <AboutSection id="about">
      {/* About me */}
      <Container>
        <Wrapper theme={theme}>
          <Header2 theme={theme}>About me</Header2>
          <Content>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paragraph theme={theme}>
                My journey in this field began a few years ago when I worked as
                a C# developer and became fascinated with process optimization
                using Selenium.
              </Paragraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paragraph theme={theme}>
                However, everything changed when I encountered a problem with a
                friend who was running a small online store. He was spending too
                much time manually setting up marketing funnels, newsletters,
                and analytics. That’s when I realized I could help him save time
                and make his business more efficient by creating automation
                solutions.
              </Paragraph>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paragraph theme={theme}>
                I started learning marketing automation tools like Zapier,
                Make.com, HubSpot, and others. With each new project, I honed my
                skills and discovered faster and more effective ways to solve
                problems. Since then, I have been working directly with various
                companies, helping them optimize their marketing processes,
                increase conversions, and reduce costs.
              </Paragraph>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paragraph theme={theme}>
                Now, I’m expanding and looking for new clients to work with,
                because once everything that can be automated is taken care of,
                it’s time to find new opportunities.
              </Paragraph>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Paragraph theme={theme}>
                My goal is to help businesses focus on what matters most by
                leaving all the automation to me. I communicate effectively with
                clients, and I don’t need complex technical specifications: with
                my extensive experience, I can turn your ideas into reality
                without unnecessary details and delays.
              </Paragraph>
            </motion.div>
          </Content>
        </Wrapper>
      </Container>

      {/* APIs worked */}
      <ApisExp />

      <Certificate />
    </AboutSection>
  );
};

export default About;
