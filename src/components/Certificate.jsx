import styled from "styled-components";
import { certificates } from "../assets/img";
import { Header2 } from "./styles/CommonStyles";
import { motion } from "framer-motion";
import { Container } from "../App";
import generalStore from "../store/store";

const CertificateContainer = styled.div`
  padding: 120px 0;
  overflow: hidden;
  background: ${({ theme }) => theme === "dark" ? "var(--dark-bg-secondary)" : "var(--bg-secondary)"};
  border-radius: 30px;
  margin: 0 20px;
`;

const ImageWrapper = styled.div`
  width: 280px;
  height: 200px;
  overflow: hidden;
  border-radius: 12px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 1px solid rgba(126, 34, 206, 0.1);
  
  &:hover {
    box-shadow: 0 15px 35px rgba(126, 34, 206, 0.2);
  }
  
  @media (max-width: 768px) {
    width: 220px;
    height: 160px;
  }
`;

const CertificateList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px;
  padding-top: 30px;
  width: 100%;

  li {
    list-style: none;
    transition: all 0.5s ease;
    transform-style: preserve-3d;
    perspective: 1000px;
    
    &:hover {
      transform: translateY(-10px);
    }
  }
  
  a {
    display: block;
    position: relative;
    transition: all 0.3s ease;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, rgba(126, 34, 206, 0), rgba(126, 34, 206, 0.2));
      border-radius: 12px;
      z-index: 2;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    &:hover::before {
      opacity: 1;
    }
    
    &::after {
      content: 'View Certificate';
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(126, 34, 206, 0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      opacity: 0;
      transition: all 0.3s ease;
      z-index: 3;
      white-space: nowrap;
    }
    
    &:hover::after {
      opacity: 1;
      bottom: 30px;
    }
  }
  
  img {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: row;
      gap: 20px;
    }
  }
  
  @media (max-width: 480px) {
    & {
      flex-direction: column;
    }
  }
`;

const CertificateTitle = styled(Header2)`
  text-align: center;
  width: 100%;
  margin-bottom: 50px;
  font-size: 42px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: var(--accent-color);
    border-radius: 3px;
  }
`;

const certVariants = {
  hidden: { 
    opacity: 0,
    y: 50
  },
  visible: (i) => ({ 
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: "easeOut"
    }
  })
};

const Certificate = () => {
  const { theme } = generalStore();
  
  const certificates_array = [
    {
      id: 1,
      name: "Make Certificate",
      img: certificates.make,
      url: "https://www.credly.com/badges/ae9a285d-3c89-4db7-b3c0-83f19e7c3e46/public_url"
    },
    {
      id: 2,
      name: "Zapier Certificate",
      img: certificates.zapier,
      url: "https://zapier.com/experts"
    },
    {
      id: 3,
      name: "AE Builder Certificate",
      img: certificates.aeBuilder,
      url: "https://verify.skilljar.com/c/fkseynfdp8h9"
    }
  ];
  
  return (
    <CertificateContainer theme={theme}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Container>
          <CertificateTitle theme={theme}>
            Certifications
          </CertificateTitle>

          <CertificateList>
            {certificates_array.map((cert, index) => (
              <motion.li
                key={cert.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={certVariants}
                viewport={{ once: true, amount: 0.2 }}
              >
                <a href={cert.url} target="_blank" rel="noopener noreferrer">
                  <ImageWrapper>
                    <img 
                      src={cert.img} 
                      alt={cert.name} 
                      loading="lazy"
                    />
                  </ImageWrapper>
                </a>
              </motion.li>
            ))}
          </CertificateList>
        </Container>
      </motion.div>
    </CertificateContainer>
  );
};

export default Certificate;
