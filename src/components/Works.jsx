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

import scenario from "../assets/img/scenario.jpg";

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

const Modal = ({ scenario, onClose }) => {
  if (!scenario) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "20px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          width: "90vw",
          maxWidth: "400px",
          maxHeight: "80vh",
          overflow: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()} // Чтобы клик внутри окна не закрывал его
      >
        <button
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "transparent",
            fontSize: "20px",
            cursor: "pointer",
          }}
          onClick={onClose}
        >
          ×
        </button>
        <h2 style={{ fontSize: "18px", textAlign: "center" }}>
          {scenario.name}
        </h2>
        <img
          src={scenario.image}
          alt={scenario.name}
          style={{
            width: "100%",
            borderRadius: "10px",
            marginBottom: "10px",
            maxHeight: "250px",
            objectFit: "cover",
          }}
        />
        <p style={{ fontSize: "14px", textAlign: "justify" }}>
          {scenario.fullDescription}
        </p>
      </div>
    </div>
  );
};

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
    fullDescription: "lorem 12312",
    image: scenario,
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
    fullDescription: "lorem 12312",
    image: scenario,
    extraScenariosCount: 3,
  },
];

const Scenarios = () => {
  const { theme } = generalStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedScenario, setSelectedScenario] = useState(null);
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

  const handleCardClick = (scenario) => {
    setSelectedScenario(scenario);
  };

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
          <ScenarioCardContainer
            key={index}
            theme={theme}
            onClick={() => handleCardClick(scenario)}
          >
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
        {selectedScenario && (
          <Modal
            scenario={selectedScenario}
            onClose={() => setSelectedScenario(null)}
          />
        )}
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
