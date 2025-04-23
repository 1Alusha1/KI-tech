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
  FaUserPlus,
  FaHubspot,
  FaFileContract,
  FaCalendar,
  FaPhoneAlt,
  FaChartLine,
  FaUsers,
  FaFileInvoice,
  FaWordpress,
  FaShopify,
  FaStripe,
  FaPaypal,
  FaComments,
  FaSms,
  FaClock,
  FaPercentage,
  FaMoneyBillWave,
  FaArrowUp,
  FaArrowDown,
  FaTimes,
  FaCheck,
  FaMicrophone,
  FaRobot,
  FaVoicemail,
  FaHeadset,
  FaCog,
  FaCode,
  FaBrain,
  FaRegLightbulb,
  FaMagic,
  FaVideo,
  FaFilm,
  FaMusic,
  FaGlobe,
  FaBox,
  FaFileAlt,
  FaRss,
  FaGavel
} from "react-icons/fa";
import { SiZapier, SiMake, SiAirtable, SiGooglesheets, SiOpenai, SiZoom, SiTrello, SiClickup, SiAsana, SiEleventyio, SiAudiomack, SiGooglecloud, SiAmazonalexa, SiMicrosoftazure, SiGmail } from "react-icons/si";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { BsFillChatDotsFill, BsFillPinMapFill } from "react-icons/bs";

import scenario from "../assets/img/scenario.jpg";

import { useState } from "react";
import generalStore from "../store/store";

const ScenariosSection = styled.div`
  padding: 100px 0;
`;

const SectionHeader = styled.div`
  margin-bottom: 40px;
  position: relative;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 0;
  color: ${({ theme }) => theme === "dark" ? "var(--dark-text-primary)" : "#333"};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, #8ca6f3, transparent);
    border-radius: 3px;
  }
`;

const YearSpan = styled.span`
  margin-left: 10px;
  color: ${({ theme }) => theme === "dark" ? "var(--dark-text-secondary)" : "#757575"};
  font-size: 18px;
  font-weight: normal;
`;

const ScenariosTitle = styled.p`
  margin-bottom: 20px;
  letter-spacing: 0.6px;
  text-align: center;
  margin-top: 10px;
  font-size: 16px;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-secondary)" : "var(--text-secondary)"};
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
  align-items: flex-start;
  padding: 24px;
  background: ${({ theme }) => theme === "dark" ? "var(--dark-card-bg)" : "#f8f9fa"};
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 600px;
  text-align: left;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(to bottom, #8ca6f3, #dce1ff);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover::after {
    opacity: 1;
  }
`;

const ModuleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const ModuleIcon = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: ${({ iconColor, theme }) => iconColor || (theme === "dark" ? "white" : "#333")};
  transition: transform 0.2s ease;
  background: ${({ theme }) => theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(248, 250, 252, 0.8)"};
  border: 1px solid ${({ theme }) => theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.05)"};
  
  &:hover {
    transform: scale(1.1);
  }
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

const ExtraScenarios = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 500;
  background: ${({ theme }) => theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(140, 166, 243, 0.1)"};
  color: ${({ theme }) => theme === "dark" ? "var(--dark-text-primary)" : "#8ca6f3"};
  border: 1px solid ${({ theme }) => theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(140, 166, 243, 0.2)"};
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0 0 10px 0;
  color: ${({ theme }) => theme === "dark" ? "var(--dark-text-primary)" : "#333"};
  font-weight: 600;
`;

const Description = styled.p`
  font-size: 14px;
  margin: 0;
  line-height: 1.6;
  color: ${({ theme }) => 
    theme === "dark" ? "var(--dark-text-secondary)" : "var(--text-secondary)"};
`;

const MetricsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;

const Metric = styled.div`
  display: flex;
  align-items: center;
  font-size: 13px;
  font-weight: 500;
  padding: 4px 12px;
  border-radius: 30px;
  background: ${({ type, theme }) => {
    if (theme === "dark") {
      switch(type) {
        case 'time': return 'rgba(76, 175, 80, 0.15)';
        case 'percent': return 'rgba(33, 150, 243, 0.15)';
        case 'money': return 'rgba(255, 193, 7, 0.15)';
        case 'multiplier': return 'rgba(156, 39, 176, 0.15)';
        default: return 'rgba(140, 166, 243, 0.15)';
      }
    } else {
      switch(type) {
        case 'time': return 'rgba(76, 175, 80, 0.1)';
        case 'percent': return 'rgba(33, 150, 243, 0.1)';
        case 'money': return 'rgba(255, 193, 7, 0.1)';
        case 'multiplier': return 'rgba(156, 39, 176, 0.1)';
        default: return 'rgba(140, 166, 243, 0.1)';
      }
    }
  }};
  color: ${({ type, theme }) => {
    if (theme === "dark") {
      switch(type) {
        case 'time': return '#81c784';
        case 'percent': return '#64b5f6';
        case 'money': return '#ffd54f';
        case 'multiplier': return '#ce93d8';
        default: return '#a0b9ff';
      }
    } else {
      switch(type) {
        case 'time': return '#2e7d32';
        case 'percent': return '#1565c0';
        case 'money': return '#f57f17';
        case 'multiplier': return '#7b1fa2';
        default: return '#3f51b5';
      }
    }
  }};
  border: 1px solid ${({ type, theme }) => {
    if (theme === "dark") {
      switch(type) {
        case 'time': return 'rgba(76, 175, 80, 0.2)';
        case 'percent': return 'rgba(33, 150, 243, 0.2)';
        case 'money': return 'rgba(255, 193, 7, 0.2)';
        case 'multiplier': return 'rgba(156, 39, 176, 0.2)';
        default: return 'rgba(140, 166, 243, 0.2)';
      }
    } else {
      switch(type) {
        case 'time': return 'rgba(76, 175, 80, 0.2)';
        case 'percent': return 'rgba(33, 150, 243, 0.2)';
        case 'money': return 'rgba(255, 193, 7, 0.2)';
        case 'multiplier': return 'rgba(156, 39, 176, 0.2)';
        default: return 'rgba(140, 166, 243, 0.2)';
      }
    }
  }};
`;

const MetricIcon = styled.div`
  margin-right: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

const MetricLabel = styled.div`
  display: flex;
  align-items: center;
`;

const MetricDirection = styled.span`
  font-size: 10px;
  margin-left: 3px;
  font-weight: bold;
  color: ${({ isPositive, theme }) => 
    isPositive 
      ? (theme === "dark" ? "#81c784" : "#2e7d32") 
      : (theme === "dark" ? "#e57373" : "#c62828")
  };
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
        {scenario.image.map((img) => (
          <img
            src={img}
            alt={scenario.name}
            style={{
              width: "100%",
              borderRadius: "10px",
              marginBottom: "10px",
              maxHeight: "250px",
              objectFit: "cover",
            }}
          />
        ))}
        <p style={{ fontSize: "14px", textAlign: "justify" }}>
          {scenario.fullDescription}
        </p>
      </div>
    </div>
  );
};

const scenarios = [
  {
    name: "Lead Management Automation",
    description: "Automated lead qualification and nurturing system for real estate agency using Go High Level. Reduced manual follow-up time by 85% and increased conversion rate by 34%.",
    modules: [
      <FaUserPlus />, // Lead capture
      <SiMake />, // Make.com
      <BsFillChatDotsFill style={{ color: "#00B5B8" }} />, // GHL icon representation
      <FaSms /> // SMS
    ],
    fullDescription: "Complete lead qualification and routing system that automatically segments incoming leads, sends personalized follow-up sequences based on lead source and behavior, and assigns to appropriate agents. Saved 32 hours per week in manual follow-up tasks.",
    extraScenariosCount: 2,
  },
  {
    name: "AI-Powered Customer Support",
    description: "Implemented ChatGPT integration with HubSpot to handle 78% of tier-1 support requests automatically. Reduced response time from 4 hours to 3 minutes.",
    modules: [
      <SiOpenai style={{ color: "#10a37f" }} />, // OpenAI (ChatGPT)
      <FaHubspot style={{ color: "#ff7a59" }} />, // HubSpot
      <FaComments />, // Chat
      <SiZapier /> // Zapier
    ],
    fullDescription: "Created an intelligent support system that uses ChatGPT to analyze incoming support tickets, automatically resolve common issues, tag and categorize complex ones, and route to the appropriate department. Saved $43,000/year in support costs.",
    extraScenariosCount: 3,
  },
  {
    name: "Marketing Campaign Analytics",
    description: "Built Airtable-based marketing analytics suite that consolidates data from 6 different platforms. Reduced reporting time by 93% and improved campaign ROI by 28%.",
    modules: [
      <SiAirtable style={{ color: "#18BFFF" }} />, // Airtable
      <TbBrandGoogleAnalytics style={{ color: "#F9AB00" }} />, // Google Analytics
      <FaChartLine />, // Analytics
      <SiMake /> // Make.com
    ],
    fullDescription: "End-to-end marketing analytics platform that automatically pulls data from Google Ads, Facebook, Instagram, Email campaigns, and website interactions into Airtable. Created automated performance dashboards that update in real-time, saving 23 hours per week in manual reporting.",
    extraScenariosCount: 4,
  },
  {
    name: "Client Onboarding System",
    description: "Streamlined client onboarding for accounting firm using HubSpot and document automation. Cut onboarding time from 2 weeks to 3 days and improved client satisfaction by 47%.",
    modules: [
      <FaHubspot style={{ color: "#ff7a59" }} />, // HubSpot
      <FaFileContract />, // Documents
      <FaCalendar />, // Calendar
      <SiZoom /> // Zoom
    ],
    fullDescription: "Complete client onboarding workflow that automatically sends personalized welcome emails, schedules kickoff meetings, generates custom contracts, and collects necessary documents through secure forms. Eliminated 87% of manual administrative tasks.",
    extraScenariosCount: 5,
  },
  {
    name: "E-commerce Order Processing",
    description: "Automated Shopify order fulfillment system with Go High Level notifications and inventory management. Processed 3x more orders with the same team size.",
    modules: [
      <FaShopify style={{ color: "#96bf48" }} />, // Shopify
      <BsFillChatDotsFill style={{ color: "#00B5B8" }} />, // GHL icon
      <FaStripe style={{ color: "#635BFF" }} />, // Stripe
      <FaDatabase /> // Database
    ],
    fullDescription: "End-to-end e-commerce automation that processes orders from multiple storefronts, updates inventory across platforms, generates shipping labels, sends customer notifications, and manages returns. Saved 63 hours per week in manual processing.",
    extraScenariosCount: 2,
  },
  {
    name: "Real Estate Lead Conversion",
    description: "Implemented Go High Level for real estate brokerage, creating automated follow-up sequences that increased lead-to-showing conversion by 56% and saved 28 agent hours weekly.",
    modules: [
      <BsFillChatDotsFill style={{ color: "#00B5B8" }} />, // GHL icon
      <FaPhoneAlt />, // Phone
      <FaSms />, // SMS
      <FaCalendar /> // Calendar
    ],
    fullDescription: "Comprehensive real estate lead management system with automated property matching, intelligent follow-up sequences based on prospect behavior, showing schedule automation, and agent notification system. Increased closed deals by 41% in the first quarter.",
    extraScenariosCount: 4,
  },
  {
    name: "Content Creation Workflow",
    description: "Built ChatGPT and Airtable content production system for digital agency that reduced content creation time by 68% while maintaining quality metrics.",
    modules: [
      <SiOpenai style={{ color: "#10a37f" }} />, // OpenAI (ChatGPT)
      <SiAirtable style={{ color: "#18BFFF" }} />, // Airtable
      <SiTrello style={{ color: "#0079BF" }} />, // Trello
      <FaWordpress /> // WordPress
    ],
    fullDescription: "Integrated content workflow that uses ChatGPT for initial drafts and outlines, manages revisions and approvals through Airtable, schedules publishing, and tracks performance metrics. Increased content output from 8 to 22 pieces per week with the same team.",
    extraScenariosCount: 3,
  },
  {
    name: "Customer Feedback Analysis",
    description: "Created automated HubSpot and ChatGPT system to analyze customer feedback across multiple channels. Identified 14 critical product improvements and increased NPS by 21 points.",
    modules: [
      <FaHubspot style={{ color: "#ff7a59" }} />, // HubSpot
      <SiOpenai style={{ color: "#10a37f" }} />, // OpenAI (ChatGPT)
      <FaChartLine />, // Analytics
      <SiGooglesheets style={{ color: "#0F9D58" }} /> // Google Sheets
    ],
    fullDescription: "AI-powered feedback analysis system that collects responses from surveys, support tickets, reviews, and social media, categorizes sentiments, identifies trends, and generates actionable reports. Reduced analysis time from 3 weeks to 1 day per quarter.",
    extraScenariosCount: 2,
  },
  {
    name: "Project Management Automation",
    description: "Integrated Airtable with ClickUp for consulting firm, automating project management workflows and reducing administrative overhead by 42%, saving $78,000 annually.",
    modules: [
      <SiAirtable style={{ color: "#18BFFF" }} />, // Airtable
      <SiClickup style={{ color: "#7B68EE" }} />, // ClickUp
      <SiAsana />, // Asana
      <FaUsers /> // Team
    ],
    fullDescription: "Comprehensive project management system that automatically creates project workspaces, assigns tasks based on skills and availability, tracks time, generates client reports, and manages resource allocation. Improved project delivery time by 34%.",
    extraScenariosCount: 4,
  },
  {
    name: "Automated Invoice Processing",
    description: "Built Go High Level and accounting software integration that automated invoice generation, payment reminders, and reconciliation. Reduced payment collection time by 62%.",
    modules: [
      <BsFillChatDotsFill style={{ color: "#00B5B8" }} />, // GHL icon
      <FaFileInvoice />, // Invoice
      <FaStripe style={{ color: "#635BFF" }} />, // Stripe
      <FaPaypal style={{ color: "#00457C" }} /> // PayPal
    ],
    fullDescription: "End-to-end financial automation system that generates custom invoices based on service delivery, sends strategic payment reminders, processes payments across multiple gateways, and reconciles transactions with accounting software. Reduced late payments by 78%.",
    extraScenariosCount: 3,
  }
];

const voiceAgentScenarios = [
  {
    name: "Voice-Enabled Customer Portal",
    description: "Implemented voice agent with Eleven Labs for insurance company. Reduced call center volume by 47% and improved customer satisfaction score from 7.1 to 9.2.",
    modules: [
      <FaMicrophone style={{ color: "#f44336" }} />,
      <SiEleventyio style={{ color: "#2962ff" }} />,
      <SiAmazonalexa style={{ color: "#00bcd4" }} />,
      <FaHeadset />
    ],
    fullDescription: "Created a comprehensive voice-enabled customer portal that handles policy inquiries, claims status, and payment processing through natural language conversations. The system uses Eleven Labs for voice synthesis, providing realistic human-like interactions that significantly improved customer experience.",
    extraScenariosCount: 4,
  },
  {
    name: "Multilingual Voice Assistant",
    description: "Developed 12-language voice assistant for travel booking platform using Eleven Labs and OpenAI. Increased international bookings by 68% and reduced translation costs by $156,000 annually.",
    modules: [
      <SiEleventyio style={{ color: "#2962ff" }} />,
      <SiOpenai style={{ color: "#10a37f" }} />,
      <BsFillPinMapFill style={{ color: "#f44336" }} />,
      <FaGlobe style={{ color: "#4caf50" }} />
    ],
    fullDescription: "Built an advanced multilingual voice assistant that allows travelers to search, compare, and book accommodation and transportation in their native language. The system supports 12 languages with cultural nuances and dialects, providing seamless voice interactions for international customers.",
    extraScenariosCount: 3,
  },
  {
    name: "Voice-Controlled Inventory System",
    description: "Created hands-free inventory management system with voice commands for warehouse operations. Increased picking speed by 34% and reduced errors by 87%.",
    modules: [
      <FaMicrophone style={{ color: "#f44336" }} />,
      <SiMicrosoftazure style={{ color: "#0078d4" }} />,
      <FaDatabase />,
      <FaBox style={{ color: "#ff9800" }} />
    ],
    fullDescription: "Designed a voice-controlled inventory management system that allows warehouse workers to perform hands-free operations including receiving, picking, packing, and inventory counts. Workers can request product locations, confirm shipments, and report issues using natural voice commands.",
    extraScenariosCount: 2,
  },
  {
    name: "AI Meeting Assistant",
    description: "Implemented meeting transcription and summarization tool using OpenAI and Eleven Labs. Reduced meeting note-taking time by 92% and improved information retention by 43%.",
    modules: [
      <SiOpenai style={{ color: "#10a37f" }} />,
      <SiEleventyio style={{ color: "#2962ff" }} />,
      <SiZoom style={{ color: "#2d8cff" }} />,
      <FaFileAlt style={{ color: "#4caf50" }} />
    ],
    fullDescription: "Developed an AI meeting assistant that records, transcribes, and summarizes discussions in real-time. The system identifies action items, assigns responsibilities, and generates concise meeting reports. Key decisions are highlighted and follow-up reminders are automatically scheduled.",
    extraScenariosCount: 5,
  },
];

const aiContentScenarios = [
  {
    name: "Personalized Video Marketing",
    description: "Created AI-driven video personalization platform using generative AI. Increased click-through rates by 317% and conversion by 86% compared to standard video campaigns.",
    modules: [
      <SiOpenai style={{ color: "#10a37f" }} />,
      <FaVideo style={{ color: "#f44336" }} />,
      <FaUsers />,
      <SiGooglecloud style={{ color: "#4285f4" }} />
    ],
    fullDescription: "Designed a sophisticated video personalization system that generates thousands of variants based on viewer demographics, preferences, and behavior. The platform dynamically customizes video content, narration, and calls-to-action for specific audience segments.",
    extraScenariosCount: 3,
  },
  {
    name: "AI-Generated Audio Content",
    description: "Implemented Eleven Labs voice synthesis for podcast network, generating 145 hours of narrated content monthly. Reduced production costs by 78% while maintaining 97% listener satisfaction.",
    modules: [
      <SiEleventyio style={{ color: "#2962ff" }} />,
      <FaMusic style={{ color: "#e91e63" }} />,
      <SiAudiomack style={{ color: "#f50" }} />,
      <FaRss style={{ color: "#ff9800" }} />
    ],
    fullDescription: "Built an end-to-end audio content generation system that transforms written articles into professionally narrated podcasts and audio stories. The platform uses advanced voice cloning technology to maintain consistent voice identities across episodes.",
    extraScenariosCount: 2,
  },
  {
    name: "AI Product Description Generator",
    description: "Integrated AI content generation for e-commerce catalog with 50,000+ products. Reduced content creation time by 96% and increased conversion rate by 23%.",
    modules: [
      <SiOpenai style={{ color: "#10a37f" }} />,
      <FaShopify style={{ color: "#96bf48" }} />,
      <FaFileAlt style={{ color: "#4caf50" }} />,
      <FaMagic style={{ color: "#9c27b0" }} />
    ],
    fullDescription: "Created an automated product description generation system that produces SEO-optimized, compelling product content at scale. The system analyzes product attributes, target audience, and competitive landscape to craft unique descriptions that highlight key selling points.",
    extraScenariosCount: 4,
  },
  {
    name: "Legal Document Automation",
    description: "Developed AI-powered legal document generation system for law firm. Reduced document creation time from 7 hours to 18 minutes and improved accuracy by 31%.",
    modules: [
      <SiOpenai style={{ color: "#10a37f" }} />,
      <FaGavel style={{ color: "#795548" }} />,
      <FaFileContract />,
      <SiMicrosoftazure style={{ color: "#0078d4" }} />
    ],
    fullDescription: "Built a comprehensive legal document automation system that drafts contracts, agreements, and legal correspondence based on specified parameters. The system incorporates jurisdiction-specific requirements and client preferences while maintaining compliance with legal standards.",
    extraScenariosCount: 2,
  },
];

const automationScenarios = [
  ...scenarios,
  ...voiceAgentScenarios,
  ...aiContentScenarios,
  // Можно добавить еще категории при необходимости
];

const Scenarios = () => {
  const { theme } = generalStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedScenario, setSelectedScenario] = useState(null);
  const [categoryFilter, setCategoryFilter] = useState("all"); // all, automation, voice, content
  const itemsPerPage = 6; // Количество элементов на одной странице

  // Фильтрация сценариев по категории
  const filteredScenarios = categoryFilter === "all" 
    ? automationScenarios 
    : categoryFilter === "voice" 
      ? voiceAgentScenarios 
      : categoryFilter === "content" 
        ? aiContentScenarios 
        : scenarios;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Разбиваем сценарии на страницы
  const indexOfLastScenario = currentPage * itemsPerPage;
  const indexOfFirstScenario = indexOfLastScenario - itemsPerPage;
  const currentScenarios = filteredScenarios.slice(
    indexOfFirstScenario,
    indexOfLastScenario
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredScenarios.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleCardClick = (scenario) => {
    setSelectedScenario(scenario);
  };

  // Улучшенная функция для извлечения и категоризации метрик
  const extractMetrics = (description) => {
    const metrics = [];
    
    // Время (сэкономлено, сокращено)
    const timeRegex = /(?:reduced|decreased|cut|saved|lowered)\s+.*?\s+(?:by|to)\s+(\d+(?:\.\d+)?)\s*(hours|hour|hrs|hr|minutes|minute|mins|min|days|day|weeks|week)/gi;
    const timeMatches = [...description.matchAll(timeRegex)];
    if (timeMatches.length > 0) {
      timeMatches.forEach(match => {
        const isReduction = /reduced|decreased|cut|lowered/i.test(match[0]);
        metrics.push({
          type: 'time',
          value: match[1] + ' ' + match[2],
          text: match[0].replace(/\.$/, ''),
          icon: <FaClock />,
          isPositive: isReduction
        });
      });
    }
    
    // Проценты (увеличение, сокращение)
    const percentRegex = /(?:increased|decreased|reduced|improved|boosted|cut|grew|lowered)\s+.*?\s+(?:by|to)\s+(\d+(?:\.\d+)?)%/gi;
    const percentMatches = [...description.matchAll(percentRegex)];
    if (percentMatches.length > 0) {
      percentMatches.forEach(match => {
        const isIncrease = /increased|improved|boosted|grew/i.test(match[0]);
        metrics.push({
          type: 'percent',
          value: match[1] + '%',
          text: match[0].replace(/\.$/, ''),
          icon: <FaPercentage />,
          isPositive: isIncrease
        });
      });
    }
    
    // Денежная экономия
    const moneyRegex = /(?:saved|cut costs|reduced expenses|lowered costs|decreased spending)\s+.*?\s+\$([\d,]+(?:\.\d+)?)[k]?/gi;
    const moneyMatches = [...description.matchAll(moneyRegex)];
    if (moneyMatches.length > 0) {
      moneyMatches.forEach(match => {
        metrics.push({
          type: 'money',
          value: '$' + match[1] + (match[0].includes('k') ? 'k' : ''),
          text: match[0].replace(/\.$/, ''),
          icon: <FaMoneyBillWave />,
          isPositive: true
        });
      });
    }
    
    // Множители (3x, 3 times)
    const multiplierRegex = /(\d+)(?:\s*x|\s+times)/gi;
    const multiplierMatches = [...description.matchAll(multiplierRegex)];
    if (multiplierMatches.length > 0) {
      multiplierMatches.forEach(match => {
        metrics.push({
          type: 'multiplier',
          value: match[1] + 'x',
          text: match[0].replace(/\.$/, ''),
          icon: <FaTimes />,
          isPositive: true
        });
      });
    }
    
    return metrics.slice(0, 3); // Возвращаем максимум 3 метрики
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
      
      <SectionHeader>
        <div style={{ textAlign: 'center' }}>
          <SectionTitle theme={theme}>
            Featured Scenarios
            <YearSpan theme={theme}>· 2023–2025</YearSpan>
          </SectionTitle>
          <ScenariosTitle theme={theme}>
            Explore our latest projects across various automation categories
          </ScenariosTitle>
        </div>
      </SectionHeader>
      
      {/* Добавляем категории/фильтры */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px', 
        marginBottom: '30px' 
      }}>
        <CategoryButton 
          active={categoryFilter === "all"} 
          onClick={() => { setCategoryFilter("all"); setCurrentPage(1); }}
          theme={theme}
        >
          All Projects
        </CategoryButton>
        <CategoryButton 
          active={categoryFilter === "automation"} 
          onClick={() => { setCategoryFilter("automation"); setCurrentPage(1); }}
          theme={theme}
        >
          Business Automation
        </CategoryButton>
        <CategoryButton 
          active={categoryFilter === "voice"} 
          onClick={() => { setCategoryFilter("voice"); setCurrentPage(1); }}
          theme={theme}
        >
          Voice Agents
        </CategoryButton>
        <CategoryButton 
          active={categoryFilter === "content"} 
          onClick={() => { setCategoryFilter("content"); setCurrentPage(1); }}
          theme={theme}
        >
          AI Content
        </CategoryButton>
      </div>

      <CardsContainer>
        {currentScenarios.map((scenario, index) => {
          const metrics = extractMetrics(scenario.description);
          
          return (
            <ScenarioCardContainer
              key={index}
              theme={theme}
              onClick={() => handleCardClick(scenario)}
            >
              <ModuleContainer>
                {scenario.modules.map((module, i) => (
                  <ModuleIcon key={i} theme={theme}>
                    {module}
                  </ModuleIcon>
                ))}
                {scenario.extraScenariosCount > 0 && (
                  <ExtraScenarios theme={theme}>
                    +{scenario.extraScenariosCount}
                  </ExtraScenarios>
                )}
              </ModuleContainer>
              <ContentContainer>
                <Title theme={theme}>{scenario.name}</Title>
                <Description theme={theme}>{scenario.description}</Description>
                {metrics.length > 0 && (
                  <MetricsContainer>
                    {metrics.map((metric, i) => (
                      <Metric key={i} theme={theme} type={metric.type}>
                        <MetricIcon>{metric.icon}</MetricIcon>
                        <MetricLabel>
                          {metric.value}
                          {metric.isPositive !== undefined && (
                            <MetricDirection isPositive={metric.isPositive} theme={theme}>
                              {metric.isPositive ? '↑' : '↓'}
                            </MetricDirection>
                          )}
                        </MetricLabel>
                      </Metric>
                    ))}
                  </MetricsContainer>
                )}
              </ContentContainer>
            </ScenarioCardContainer>
          );
        })}
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

// Добавляем стиль для кнопок категорий
const CategoryButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${({ active, theme }) => 
    active 
      ? (theme === "dark" ? "#8ca6f3" : "#8ca6f3") 
      : (theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.05)")};
  color: ${({ active, theme }) => 
    active 
      ? (theme === "dark" ? "#fff" : "#fff") 
      : (theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)")};
  
  &:hover {
    background: ${({ active, theme }) => 
      active 
        ? (theme === "dark" ? "#8ca6f3" : "#8ca6f3") 
        : (theme === "dark" ? "rgba(255, 255, 255, 0.15)" : "rgba(0, 0, 0, 0.08)")};
    transform: translateY(-2px);
  }
`;

export default Scenarios;
