import styled from "styled-components";
import { GradientBackground, Headline, Highlight } from "./Hero";

const Header2 = styled.h2`
  margin: 0 auto;
  margin-bottom: 60px;
  width: 50%;
  text-align: center;
  font-size: 57px;
  font-weight: 400;
  font-family: "Noto Sans Mono", monospace;

  @media (max-width: 768px) {
    & {
      font-size: 24px;
    }
  }
  @media (max-width: 425px) {
    & {
      margin: 0;
      margin-bottom: 20px;
      align-items: center;
      width: auto;
    }
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    text-decoration: none;
  }

  @media (max-width: 425px) {
    & {
      font-size: 18px;
      span {
        display: none;
      }
    }
  }
  @media (max-width: 425px) {
    & {
      font-size: 16px;
    }
  }
`;

const Contact = () => {
  return (
    <GradientBackground
      style={{ textAlign: "center", marginBottom: "40px" }}
      id="contact"
    >
      <Headline>
        Want to create something <Highlight>awesome?</Highlight>
        <span style={{ display: "block" }}>Drop me an email.</span>
      </Headline>
      <EmailLink>
        <span>→</span> killhome2000@gmail.com
      </EmailLink>
    </GradientBackground>
  );
};

export default Contact;
