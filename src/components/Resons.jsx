import styled from "styled-components";
import { Header2, Paragraph } from "./About";
import { motion } from "framer-motion";
import { BackGround } from "./ApisExp";
import { Container } from "../App";
import ExperienceIcon from "./icons/ExperienceIcon";
import QualityIcon from "./icons/QualityIcon";
import ShieldIcon from "./icons/ShieldIcon";
import HandsIcon from "./icons/HandsIcon";
import CodeIcon from "./icons/CodeIcon";
import { useState, useRef } from "react";
import generalStore from "../store/store";

const ResonContainer = styled.div`
  padding: 140px 0;
`;

const ReasonWrap = styled(motion.div)`
  gap: 30px;
  padding: 20px;
  overflow: hidden;

  @media (max-width: 425px) {
    display: block;
  }
`;

const ReasonBlock = styled(motion.div)`
  margin-bottom: 20px;
  padding: 20px;
  height: 100%;
  box-shadow: -1px 1px 9px 0px #000;
  border-radius: 10px;
  cursor: pointer;
  background: #fff;
`;

const ReasonContent = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen, contentHeight }) =>
    isOpen ? `${contentHeight}px` : "0"};
  transition: max-height 0.4s ease-in-out;
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

  h2 {
    width: auto;
    margin: 0;
  }

  svg {
    margin-right: 10px;
  }

  @media (max-width: 320px) {
    gap: 0;
    align-items: normal;

    h2 {
      font-size: 24px;
    }
  }
`;

const accItems = [
  {
    icon: <ExperienceIcon />,
    title: "EXPERIENCE",
    text: `With years of experience in marketing automation and process
                  optimization, I bring a deep understanding of both the
                  technical and strategic sides of the industry. Whether working
                  with small businesses or large organizations, I have developed
                  and implemented solutions that streamline marketing workflows,
                  boost efficiency, and drive results. My expertise spans across
                  popular automation tools like Zapier, Make.com, HubSpot, and
                  more, ensuring that I can tailor solutions to meet your unique
                  business needs.`,
  },
  {
    icon: <QualityIcon />,
    title: "QUALITY",
    text: `Quality is at the heart of everything I do. I believe in
                  delivering solutions that not only meet but exceed
                  expectations. Every project I take on is executed with
                  meticulous attention to detail, ensuring that the automation
                  processes are robust, efficient, and scalable. By focusing on
                  quality, I help businesses achieve long-term success,
                  optimizing their marketing and workflows without compromising
                  on performance or reliability.`,
  },
  {
    icon: <ShieldIcon />,
    title: "SAFETY",
    text: `When it comes to automation, security is a top priority. I
                  implement best practices for data protection and ensure that
                  all processes are compliant with relevant regulations. From
                  secure API integrations to safe data handling, I work to
                  ensure that your business’s sensitive information is always
                  protected. You can trust that your systems and data are in
                  safe hands with me.`,
  },
  {
    icon: <HandsIcon />,
    title: "TRUST",
    text: `Trust is the foundation of any successful partnership. I
                  prioritize building strong, transparent relationships with my
                  clients, ensuring that communication is clear and expectations
                  are always aligned. My track record of delivering consistent
                  results and my dedication to understanding your business needs
                  make me a reliable partner in driving your success through
                  automation.`,
  },
  {
    icon: <CodeIcon />,
    title: "No Need for Detailed Technical Specifications",
    text: `With my extensive experience, I can easily convert your
                  requests into results, without requiring extensive technical
                  documentation. I understand how to get things done with
                  minimal input, ensuring maximum efficiency for both of us.`,
  },
];

const Reason = () => {
  const { theme } = generalStore();
  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleAccordion = (i) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <BackGround bg="#bcfdb9" theme={theme}>
      <ResonContainer>
        <Container>
          <Header2 style={{ paddingBottom: "100px" }} theme={theme}>
            Why Choose Me?
          </Header2>

          <ReasonWrap
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {accItems.map((item, i) => (
              <ReasonBlock
                variants={itemVariants}
                key={i}
                onClick={() => toggleAccordion(i)}
              >
                <TitleWrapper>
                  {item.icon}
                  <Header2>{item.title}</Header2>
                </TitleWrapper>

                <ReasonContent
                  isOpen={i === openIndex}
                  contentHeight={contentRefs.current[i]?.scrollHeight || "auto"}
                >
                  <Paragraph ref={(el) => (contentRefs.current[i] = el)}>
                    {item.text}
                  </Paragraph>
                </ReasonContent>
              </ReasonBlock>
            ))}
          </ReasonWrap>
        </Container>
      </ResonContainer>
    </BackGround>
  );
};

export default Reason;
