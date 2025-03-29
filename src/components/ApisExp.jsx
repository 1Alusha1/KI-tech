import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Container } from "../App";
import { Header2 } from "./About";
import generalStore from "../store/store";

export const Button = styled.button`
  width: 100%;
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  font-size: 18px;
  padding: 12px 24px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 30px;
  transition: all 0.3s ease;
  outline: none;

  &:hover {
    background: #fff;
    transition: all 0.5s ease;
    color: #000;
  }
`;

export const BackGround = styled.div`
  background: ${({ bg, theme }) =>
    theme === "dark" ? "var(--dark-bg-secondary)" : bg};
`;

const ApisContainer = styled.div`
  display: flex;
  padding: 100px 0;
  color: var(--text-primary);

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const ApisExpWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  gap: 30px;
  ul {
    width: 50%;
    padding-right: 10px;
    border-right: 1px solid #f0f0f0;
    text-align: center;
  }
  ul:last-child {
    padding-right: 0;
    border-right: none;
  }
  li {
    margin-bottom: 10px;
    font-size: 24px;
    color: #525252;
    list-style: none;
  }

  h2 {
    margin-bottom: 40px;
  }

  li {
    color: #fff;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      align-items: center;

      ul {
        padding-right: 0;
        padding-bottom: 30px;
        border-right: none;
        border-bottom: 1px solid #f0f0f0;
        li {
          text-align: center;
        }
      }
    }
  }
  @media (max-width: 425px) {
    ul {
      width: 100%;
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const ApisExp = () => {
  const { theme } = generalStore();
  const [page, setPage] = useState(0);

  const hendleClick = () => {
    if (page === 4) {
      return;
    }

    setPage((prev) => prev + 1);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{ width: "100%" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <BackGround bg="#8ca6f3" theme={theme}>
        <Container>
          <ApisContainer>
            <Header2 style={{color:'var(--dark-text-primary)'}}>APIs worked</Header2>
            <Wrapper>
              <ApisExpWrapper className="apis-wrapper">
                <ul>
                  <li>HubSpot API</li>
                  <li>ActiveCampaign</li>
                  <li>OPENAI API</li>
                  <li>Make.com API</li>
                  <li>Google Analytics</li>
                  <li>Salesforce API</li>
                  <li>MONDAY API</li>
                </ul>
                <ul>
                  <li>Facebook Marketing</li>
                  <li>GHL API</li>
                  <li>Airtable API</li>
                  <li>Asana API</li>
                  <li>Slack API</li>
                  <li>Zoom API</li>
                  <li>Intercom API</li>
                </ul>
              </ApisExpWrapper>
              {page === 0 && <Button onClick={hendleClick}>Show more</Button>}

              {page >= 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ApisExpWrapper className="apis-wrapper">
                    <ul>
                      <li>Twilio API</li>
                      <li>Shopify API</li>
                      <li>Stripe API</li>
                      <li>WooCommerce API</li>
                      <li>Google Sheets API</li>
                      <li>Trello API</li>
                      <li>ClickFunnels API</li>
                    </ul>
                    <ul>
                      <li>Notion API</li>
                      <li>Klaviyo API</li>
                      <li>Zendesk API</li>
                      <li>Calendly API</li>
                      <li>GCF API</li>
                      <li>AWS Lambda API</li>
                      <li>SurveyMonkey API</li>
                    </ul>
                  </ApisExpWrapper>
                </motion.div>
              )}
              {page === 1 && <Button onClick={hendleClick}>Show more</Button>}

              {page >= 2 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  style={{ width: "100%" }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <ApisExpWrapper className="apis-wrapper">
                    <ul>
                      <li>Pipedrive API</li>
                      <li>Google Drive API</li>
                      <li>BigCommerce API</li>
                      <li>ClickUp API</li>
                      <li>Pandadoc API</li>
                      <li>Typeform API</li>
                      <li>Sage One API</li>
                    </ul>
                    <ul>
                      <li>QuickFile API</li>
                      <li>Github API</li>
                      <li>Stripe API</li>
                      <li>Slackbto API</li>
                      <li>Vimeo API</li>
                      <li>MP BI API</li>
                      <li>GitLab API</li>
                    </ul>
                  </ApisExpWrapper>
                </motion.div>
              )}
            </Wrapper>
          </ApisContainer>
        </Container>
      </BackGround>
    </motion.div>
  );
};

export default ApisExp;
