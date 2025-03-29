import styled from "styled-components";
import { Header2, Paragraph } from "./About";
import { color, motion } from "framer-motion";
import { BackGround } from "./ApisExp";
import { Container } from "../App";
import generalStore from "../store/store";

const ResonContainer = styled.div`
  padding: 140px 0;
`;

const ReasonWrap = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 30px;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 425px) {
    & {
      display: block;
    }
  }
`;

const ReasonBlock = styled(motion.div)`
  box-shadow: -1px 1px 9px 0px #000;
  padding: 20px;
  margin-bottom: 20px;
  height: 100%;
  border-radius: 10px;
  background: ${({ theme }) =>
    theme === "dark" ? "var(--dark-card-bg)" : "--card-bg"};
`;
const ReasonContent = styled.div`
  p {
    letter-spacing: 1px;
  }

  @media (max-width: 425px) {
    p {
      text-align: justify;
    }
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  h2 {
    width: auto;
    margin: 0;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 375px) {
    & {
      gap: 0;
      align-items: normal;
    }
    h2 {
      font-size: 18px;
    }
  }
`;

const HowWorks = () => {
  const { theme } = generalStore();

  return (
    <BackGround>
      <ResonContainer>
        <Container>
          <Header2 style={{ paddingBottom: "100px" }} theme={theme}>
            HOW DOES IT WORKS
          </Header2>

          <ReasonWrap
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <ReasonBlock variants={itemVariants} theme={theme}>
              <ReasonContent>
                <TitleWrapper>
                  <Header2 theme={theme}>01. Understanding Your Needs</Header2>
                </TitleWrapper>
                <Paragraph theme={theme}>
                  We start by discussing your business goals, current processes,
                  and pain points. Understanding your unique needs is crucial to
                  creating a tailored automation solution.
                </Paragraph>
              </ReasonContent>
            </ReasonBlock>
            <ReasonBlock variants={itemVariants} theme={theme}>
              <ReasonContent>
                <TitleWrapper>
                  <Header2 theme={theme}>02. Choosing the Right Tools</Header2>
                </TitleWrapper>
                <Paragraph theme={theme}>
                  Based on your goals, we select the best tools for automating
                  your marketing, workflows, or any other business process. I
                  work with a wide range of platforms like Zapier, Make.com,
                  HubSpot, ActiveCampaign, and more to ensure the best fit for
                  your business.
                </Paragraph>
              </ReasonContent>
            </ReasonBlock>
            <ReasonBlock variants={itemVariants} theme={theme}>
              <ReasonContent>
                <TitleWrapper>
                  <Header2 theme={theme}>03. Building Your Automation</Header2>
                </TitleWrapper>
                <Paragraph theme={theme}>
                  Once we know what tools to use, I’ll create custom workflows
                  that automate repetitive tasks. Whether it’s setting up
                  marketing funnels, email campaigns, or CRM automation, I’ll
                  make sure everything runs seamlessly in the background.
                </Paragraph>
              </ReasonContent>
            </ReasonBlock>
            <ReasonBlock variants={itemVariants} theme={theme}>
              <ReasonContent>
                <TitleWrapper>
                  <Header2 theme={theme}>04. Integration and Testing</Header2>
                </TitleWrapper>
                <Paragraph theme={theme}>
                  After the automation is built, I’ll integrate it with your
                  existing systems and test everything to ensure smooth
                  functionality. If any adjustments are needed, they will be
                  made to ensure the system works perfectly for your business.
                </Paragraph>
              </ReasonContent>
            </ReasonBlock>
          </ReasonWrap>
        </Container>
      </ResonContainer>
    </BackGround>
  );
};

export default HowWorks;
