import styled, { css } from "styled-components";

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

export const Paragraph = styled.p`
  margin-bottom: 32px;
  letter-spacing: 3px;
  color: ${({ theme }) =>
    theme === "dark" ? "var(--dark-text-primary)" : "var(--text-primary)"};
`; 