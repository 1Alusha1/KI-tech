import Counter from "./ui/Count";
import styled, { css } from "styled-components";
import {
  FaSlack,
  FaTable,
  FaGoogle,
  FaSyncAlt,
  FaEllipsisH,
  FaDatabase,
  FaFacebook,
  FaCreditCard,
} from "react-icons/fa";
import { useState } from "react";
import generalStore from "../store/store";

const ScenariosSection = styled.div`
  padding: 100px 0;
`;

const ScenariosTitle = styled.p`
  margin-bottom: 20px;
  letter-spacing: 0.6px;

  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-secondary)" : "var(--text-secondary)"};
  span {
    color: #757575;
  }
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
const CountContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-bottom: 30px;

  @media (max-width: 425px) {
    flex-direction: column;
    width: 100%;
  }
`;
const ScenarioCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 250px;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s ease;
  margin-bottom: 20px;

  ${({ theme }) =>
    theme == "dark"
      ? css`
          & {
            background: var(--dark-card-bg);
            color: var(--dark-text-primary);
          }
        `
      : ""};
  &:hover {
    transform: translateY(-5px);
  }
`;

const ModuleContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 15px;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;

  ${({ theme }) =>
    theme === "light" ? "var(--text-secondary)" : "var(--dark-text-secondary)"}
`;

const ModuleIcon = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ExtraScenarios = styled.div`
  font-size: 30px;
  ${({ theme }) =>
    theme === "light" ? "var(--text-secondary)" : "var(--dark-text-secondary)"}
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-weight: bold;
  }
`;

const scenarios = [
  {
    name: "Migrate Data",
    description:
      "Migrate data between Google Sheets, Airtable, and Slack. Automatically sync and notify team members of updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Airtable
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Sync CRM Data",
    description:
      "Sync and manage customer data between various platforms like Google Sheets and CRM systems.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaSyncAlt />, // Иконка для синхронизации данных
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Team Notification",
    description:
      "Send notifications to your team via Slack when certain events happen in your system.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaGoogle />, // Иконка для связи с Google или другими сервисами
    ],
    extraScenariosCount: 5,
  },
  {
    name: "Sales Lead Automation",
    description:
      "Automatically capture and manage leads through Google Sheets, Pipedrive, and Slack.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Pipedrive
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Order Processing",
    description:
      "Sync e-commerce orders from WooCommerce and Shopify into a centralized Google Sheets.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка WooCommerce
      <FaDatabase />, // Иконка для базы данных
    ],
    extraScenariosCount: 4,
  },
  {
    name: "Social Media Analytics",
    description:
      "Sync Facebook Marketing data with Google Analytics to track and optimize campaigns.",
    modules: [
      <FaFacebook />, // Иконка Facebook Marketing
      <FaGoogle />, // Иконка Google Analytics
    ],
    extraScenariosCount: 1,
  },
  {
    name: "Customer Support Automation",
    description:
      "Automate customer service workflows with Zendesk and Intercom APIs.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaTable />, // Иконка Zendesk
      <FaDatabase />, // Иконка Intercom
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Data Backup",
    description:
      "Automate backups of Google Sheets and other cloud storage services with AWS Lambda.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка AWS Lambda
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Automated Marketing Campaigns",
    description:
      "Sync marketing data across Klaviyo, Google Sheets, and Facebook Marketing for automated campaigns.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Klaviyo
      <FaFacebook />, // Иконка Facebook Marketing
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Invoice Automation",
    description:
      "Sync invoice data between QuickFile API, Stripe, and Google Sheets for automatic updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка QuickFile API
      <FaCreditCard />, // Иконка Stripe
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Migrate Data",
    description:
      "Migrate data between Google Sheets, Airtable, and Slack. Automatically sync and notify team members of updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Airtable
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Sync CRM Data",
    description:
      "Sync and manage customer data between various platforms like Google Sheets and CRM systems.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaSyncAlt />, // Иконка для синхронизации данных
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Team Notification",
    description:
      "Send notifications to your team via Slack when certain events happen in your system.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaGoogle />, // Иконка для связи с Google или другими сервисами
    ],
    extraScenariosCount: 5,
  },
  {
    name: "Sales Lead Automation",
    description:
      "Automatically capture and manage leads through Google Sheets, Pipedrive, and Slack.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Pipedrive
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Order Processing",
    description:
      "Sync e-commerce orders from WooCommerce and Shopify into a centralized Google Sheets.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка WooCommerce
      <FaDatabase />, // Иконка для базы данных
    ],
    extraScenariosCount: 4,
  },
  {
    name: "Social Media Analytics",
    description:
      "Sync Facebook Marketing data with Google Analytics to track and optimize campaigns.",
    modules: [
      <FaFacebook />, // Иконка Facebook Marketing
      <FaGoogle />, // Иконка Google Analytics
    ],
    extraScenariosCount: 1,
  },
  {
    name: "Customer Support Automation",
    description:
      "Automate customer service workflows with Zendesk and Intercom APIs.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaTable />, // Иконка Zendesk
      <FaDatabase />, // Иконка Intercom
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Data Backup",
    description:
      "Automate backups of Google Sheets and other cloud storage services with AWS Lambda.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка AWS Lambda
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Automated Marketing Campaigns",
    description:
      "Sync marketing data across Klaviyo, Google Sheets, and Facebook Marketing for automated campaigns.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Klaviyo
      <FaFacebook />, // Иконка Facebook Marketing
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Invoice Automation",
    description:
      "Sync invoice data between QuickFile API, Stripe, and Google Sheets for automatic updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка QuickFile API
      <FaCreditCard />, // Иконка Stripe
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Migrate Data",
    description:
      "Migrate data between Google Sheets, Airtable, and Slack. Automatically sync and notify team members of updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Airtable
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Sync CRM Data",
    description:
      "Sync and manage customer data between various platforms like Google Sheets and CRM systems.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaSyncAlt />, // Иконка для синхронизации данных
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Team Notification",
    description:
      "Send notifications to your team via Slack when certain events happen in your system.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaGoogle />, // Иконка для связи с Google или другими сервисами
    ],
    extraScenariosCount: 5,
  },
  {
    name: "Sales Lead Automation",
    description:
      "Automatically capture and manage leads through Google Sheets, Pipedrive, and Slack.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Pipedrive
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Order Processing",
    description:
      "Sync e-commerce orders from WooCommerce and Shopify into a centralized Google Sheets.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка WooCommerce
      <FaDatabase />, // Иконка для базы данных
    ],
    extraScenariosCount: 4,
  },
  {
    name: "Social Media Analytics",
    description:
      "Sync Facebook Marketing data with Google Analytics to track and optimize campaigns.",
    modules: [
      <FaFacebook />, // Иконка Facebook Marketing
      <FaGoogle />, // Иконка Google Analytics
    ],
    extraScenariosCount: 1,
  },
  {
    name: "Customer Support Automation",
    description:
      "Automate customer service workflows with Zendesk and Intercom APIs.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaTable />, // Иконка Zendesk
      <FaDatabase />, // Иконка Intercom
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Data Backup",
    description:
      "Automate backups of Google Sheets and other cloud storage services with AWS Lambda.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка AWS Lambda
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Automated Marketing Campaigns",
    description:
      "Sync marketing data across Klaviyo, Google Sheets, and Facebook Marketing for automated campaigns.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Klaviyo
      <FaFacebook />, // Иконка Facebook Marketing
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Invoice Automation",
    description:
      "Sync invoice data between QuickFile API, Stripe, and Google Sheets for automatic updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка QuickFile API
      <FaCreditCard />, // Иконка Stripe
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Migrate Data",
    description:
      "Migrate data between Google Sheets, Airtable, and Slack. Automatically sync and notify team members of updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Airtable
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Sync CRM Data",
    description:
      "Sync and manage customer data between various platforms like Google Sheets and CRM systems.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaSyncAlt />, // Иконка для синхронизации данных
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Team Notification",
    description:
      "Send notifications to your team via Slack when certain events happen in your system.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaGoogle />, // Иконка для связи с Google или другими сервисами
    ],
    extraScenariosCount: 5,
  },
  {
    name: "Sales Lead Automation",
    description:
      "Automatically capture and manage leads through Google Sheets, Pipedrive, and Slack.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Pipedrive
      <FaSlack />, // Иконка Slack
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Order Processing",
    description:
      "Sync e-commerce orders from WooCommerce and Shopify into a centralized Google Sheets.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка WooCommerce
      <FaDatabase />, // Иконка для базы данных
    ],
    extraScenariosCount: 4,
  },
  {
    name: "Social Media Analytics",
    description:
      "Sync Facebook Marketing data with Google Analytics to track and optimize campaigns.",
    modules: [
      <FaFacebook />, // Иконка Facebook Marketing
      <FaGoogle />, // Иконка Google Analytics
    ],
    extraScenariosCount: 1,
  },
  {
    name: "Customer Support Automation",
    description:
      "Automate customer service workflows with Zendesk and Intercom APIs.",
    modules: [
      <FaSlack />, // Иконка Slack
      <FaTable />, // Иконка Zendesk
      <FaDatabase />, // Иконка Intercom
    ],
    extraScenariosCount: 3,
  },
  {
    name: "Data Backup",
    description:
      "Automate backups of Google Sheets and other cloud storage services with AWS Lambda.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка AWS Lambda
    ],
    extraScenariosCount: 0,
  },
  {
    name: "Automated Marketing Campaigns",
    description:
      "Sync marketing data across Klaviyo, Google Sheets, and Facebook Marketing for automated campaigns.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaTable />, // Иконка Klaviyo
      <FaFacebook />, // Иконка Facebook Marketing
    ],
    extraScenariosCount: 2,
  },
  {
    name: "Invoice Automation",
    description:
      "Sync invoice data between QuickFile API, Stripe, and Google Sheets for automatic updates.",
    modules: [
      <FaGoogle />, // Иконка Google Sheets
      <FaDatabase />, // Иконка QuickFile API
      <FaCreditCard />, // Иконка Stripe
    ],
    extraScenariosCount: 3,
  },
];

const Scenarios = () => {
  const { theme } = generalStore();
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Количество элементов на одной странице

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Разбиваем сценарии на страницы
  const indexOfLastScenario = currentPage * itemsPerPage;
  const indexOfFirstScenario = indexOfLastScenario - itemsPerPage;
  const currentScenarios = scenarios.slice(
    indexOfFirstScenario,
    indexOfLastScenario
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(scenarios.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ScenariosSection id="works">
      <CountContainer>
        <Counter value={100} duration={3} symbol="+">
          <span>Project</span>
        </Counter>
        <Counter value={4} duration={3}>
          <span>Years in business</span>
        </Counter>
        <Counter value={1000} duration={3} symbol=">">
          <span>Scenarios</span>
        </Counter>
      </CountContainer>
      <ScenariosTitle>
        Featured Scenarios <span>· 2023–2025</span>
      </ScenariosTitle>
      <CardsContainer>
        {currentScenarios.map((scenario, index) => (
          <ScenarioCardContainer key={index} theme={theme}>
            <ModuleContainer>
              {scenario.modules.map((module, i) => (
                <ModuleIcon key={i}>{module}</ModuleIcon>
              ))}
              {scenario.extraScenariosCount > 0 && (
                <ExtraScenarios theme={theme}>
                  <FaEllipsisH />
                  <span>+{scenario.extraScenariosCount}</span>
                </ExtraScenarios>
              )}
            </ModuleContainer>
            <Title>{scenario.name}</Title>
            <Description theme={theme}>{scenario.description}</Description>
          </ScenarioCardContainer>
        ))}
      </CardsContainer>
      <Pagination>
        {pageNumbers.map((number) => (
          <PageNumber
            key={number}
            onClick={() => paginate(number)}
            active={number === currentPage}
            theme={theme}
          >
            {number}
          </PageNumber>
        ))}
      </Pagination>
    </ScenariosSection>
  );
};

// Компоненты пагинации
const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.button`
  padding: 10px;
  margin: 0 5px;
  cursor: pointer;
  border: none;
  border-radius: 5px;

  ${({ theme }) =>
    theme == "dark"
      ? css`
          background: var(--dark-card-bg);
          color: var(--dark-text-primary);
        `
      : ""};

  ${({ theme, active }) => {
    if (theme === "light" && active) {
      return css`
        background-color: #007bff;
        color: #fff;
      `;
    }
    if (theme === "dark" && active) {
      return css`
        background: #007bff;
        color: var(--dark-text-primary);
      `;
    }
  }}

  &:hover {
    background-color: ${({ theme }) =>
      theme === "light" ? "#007bff" : "#0a52a0"};
    color: #fff;
  }
`;

export default Scenarios;
