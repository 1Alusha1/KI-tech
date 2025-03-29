import styled from "styled-components";
import { certificates } from "../assets/img";
import { Header2 } from "./About";
import { motion } from "framer-motion";
import { Container } from "../App";
import generalStore from "../store/store";

const CertificateContainer = styled.div`
  padding: 100px 0;
  overflow: hidden;
`;

const CertificateList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 20px;
  width: 100%;

  li{
    list-style: none;
  }
  img {
    width: 240px;
    height: auto;
  }

  @media (max-width: 768px) {
    & {
      flex-direction: column;
      gap: 20px;
    }
  }
`;

const CertificateWrapper = styled.div`
`;

const Certificate = () => {
  const { theme } = generalStore();
  return (
    <CertificateContainer>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <CertificateWrapper>
          <Container>
            <Header2 style={{ paddingBottom: "100px" }} theme={theme}>
              Certificates
            </Header2>

            <CertificateList>
              <li>
                <a
                  href="https://www.credly.com/badges/ae9a285d-3c89-4db7-b3c0-83f19e7c3e46/public_url"
                  target="_blank"
                >
                  <img src={certificates.make} alt="Make certificate" />
                </a>
              </li>
              <li>
                <a href="" target="_blank">
                  <img src={certificates.zapier} alt="Zapier certificate" />
                </a>
              </li>
              <li>
                <a
                  href="https://verify.skilljar.com/c/fkseynfdp8h9"
                  target="_blank"
                >
                  <img
                    src={certificates.aeBuilder}
                    alt="AE builder certificate"
                  />
                </a>
              </li>
            </CertificateList>
          </Container>
        </CertificateWrapper>
      </motion.div>
    </CertificateContainer>
  );
};

export default Certificate;
