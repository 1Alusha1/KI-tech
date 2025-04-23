import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import { Container } from "../App";
import { Header2 } from "./styles/CommonStyles";
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
  margin-top: 30px;

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
  padding: 100px 0;
  color: var(--text-primary);
`;

const ApiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-top: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ApiItem = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;
  cursor: pointer;
  color: #fff;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }
  
  p {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
  }
`;

const ApisExp = () => {
  const { theme } = generalStore();
  const [showMore, setShowMore] = useState(false);
  
  const apis = [
    // Page 1
    "HubSpot API", "ActiveCampaign", "OPENAI API", "Make.com API", 
    "Google Analytics", "Salesforce API", "MONDAY API", "Facebook Marketing",
    "GHL API", "Airtable API", "Asana API", "Slack API", 
    "Zoom API", "Intercom API",
    
    // Page 2
    "Twilio API", "Shopify API", "Stripe API", "WooCommerce API",
    "Google Sheets API", "Trello API", "ClickFunnels API", "Notion API",
    "Klaviyo API", "Zendesk API", "Calendly API", "GCF API",
    "AWS Lambda API", "SurveyMonkey API",
    
    // Page 3
    "Pipedrive API", "Google Drive API", "BigCommerce API", "ClickUp API",
    "Pandadoc API", "Typeform API", "Sage One API", "QuickFile API",
    "Github API", "Stripe API", "Slackbto API", "Vimeo API",
    "MP BI API", "GitLab API"
  ];
  
  const displayedApis = showMore ? apis : apis.slice(0, 16);

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
            <Header2 style={{ color: 'var(--dark-text-primary)', textAlign: 'center' }}>APIs We've Worked With</Header2>
            
            <ApiGrid>
              {displayedApis.map((api, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5,
                    delay: index * 0.05
                  }}
                >
                  <ApiItem>
                    <p>{api}</p>
                  </ApiItem>
                </motion.div>
              ))}
            </ApiGrid>
            
            {!showMore && (
              <Button onClick={() => setShowMore(true)}>Show More APIs</Button>
            )}
          </ApisContainer>
        </Container>
      </BackGround>
    </motion.div>
  );
};

export default ApisExp;
