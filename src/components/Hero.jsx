import { useEffect, useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { Container } from "../App";
import MouseIcon from "./icons/MouseIcon";
import React from "react";
import generalStore from "../store/store";
import { motion } from "framer-motion";

// Enhanced gradient animation
const gradient = keyframes`
  0% {
    background-position: 0% 25%;
  }
  25% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 100% 50%;
  }
  75% {
    background-position: 50% 100%;
  }
  100% {
    background-position: 0% 25%;
  }
`;

const glow = keyframes`
  0%, 100% {
    box-shadow: 0 0 70px rgba(126, 34, 206, 0.5);
  }
  25% {
    box-shadow: 0 0 80px rgba(168, 85, 247, 0.6);
  }
  50% {
    box-shadow: 0 0 90px rgba(192, 38, 211, 0.7);
  }
  75% {
    box-shadow: 0 0 80px rgba(126, 34, 206, 0.6);
  }
`;

const floatAnimation = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
`;

const floatAnimation2 = keyframes`
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  50% {
    transform: translateY(20px) rotate(-5deg);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const pulseAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
`;

// Shimmer animation for particle effects
const shimmer = keyframes`
  0% {
    transform: translateX(-100%) rotate(0deg);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%) rotate(360deg);
    opacity: 0;
  }
`;

export const GradientBackground = styled.div`
  position: relative;
  width: 90%;
  padding: 40px 30px;
  border-radius: 24px;
  margin: 0 auto;
  overflow: hidden;
  background: linear-gradient(
    -45deg,
    #7e22ce,
    #a855f7,
    #c026d3,
    #38bdf8,
    #22d3ee,
    #8bc34a,
    #7e22ce,
    #a855f7,
    #c026d3,
    #38bdf8,
    #22d3ee,
    #8bc34a
  );
  background-size: 400% 400%;
  animation: ${gradient} 20s ease infinite, ${glow} 15s ease infinite;
  transform-style: preserve-3d;
  perspective: 1000px;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    border-radius: inherit;
    filter: blur(25px);
    opacity: 0.7;
    z-index: -1;
  }
  
  /* Particle effects */
  &::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    right: -50%;
    bottom: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.2) 40%,
      rgba(255, 255, 255, 0.3) 50%,
      rgba(255, 255, 255, 0.2) 60%,
      rgba(255, 255, 255, 0) 100%
    );
    transform: rotate(25deg);
    pointer-events: none;
    animation: ${shimmer} 10s infinite linear;
    z-index: 1;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 20px;
  height: 100%;
  position: relative;
  z-index: 2;
`;

export const Headline = styled.div`
  display: block;
  margin-bottom: 30px;
  margin: 0 auto;
  width: 70%;
  font-size: 4rem;
  font-weight: bold;
  color: white;
  line-height: 1.2;
  text-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transform-style: preserve-3d;
  
  @media (max-width: 1024px) {
    & {
      width: 80%;
      font-size: 3.5rem;
    }
  }

  @media (max-width: 768px) {
    & {
      width: 100%;
      font-size: 3rem;
    }
  }
  @media (max-width: 425px) {
    & {
      width: 100%;
      margin-bottom: 20px;
      font-size: 2.25rem;
    }
  }
  @media (max-width: 320px) {
    & {
      margin-bottom: 15px;
      font-size: 1.75rem;
    }
  }
`;

export const Highlight = styled.span`
  color: #fff;
  position: relative;
  display: inline-block;
  text-decoration: none;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.9);
    transform: scaleX(1);
    transform-origin: left;
    transition: transform 0.5s ease;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
  }
  
  &:hover::after {
    transform: scaleX(0);
    transform-origin: right;
  }
`;

export const Tagline = styled.div`
  margin: 0 auto;
  margin-bottom: 30px;
  width: 70%;
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.95);
  line-height: 1.6;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 1024px) {
    & {
      width: 80%;
    }
  }
  
  @media (max-width: 768px) {
    & {
      width: 100%;
      font-size: 1.25rem;
    }
  }
  @media (max-width: 425px) {
    & {
      width: 100%;
      font-size: 1rem;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 320px) {
    & {
      gap: 15px;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  font-size: 1rem;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover::before {
    opacity: 0.2;
  }
`;

const LightButton = styled(Button)`
  background-color: white;
  color: #0f172a;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  &::before {
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(168,85,247,0.3) 100%);
  }

  @media (max-width: 320px) {
    & {
      padding: 0.75rem 1.5rem;
      font-size: 0.9rem;
      width: 100%;
    }
  }
`;

const GradientButton = styled(Button)`
  background: linear-gradient(135deg, #7e22ce, #a855f7, #c026d3);
  background-size: 200% auto;
  color: white;
  box-shadow: 0 4px 15px rgba(126, 34, 206, 0.3);
  transition: all 0.5s ease;

  &:hover {
    background-position: right center;
    box-shadow: 0 10px 30px rgba(126, 34, 206, 0.5);
  }
  
  &::before {
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
  }

  @media (max-width: 320px) {
    & {
      padding: 0.75rem 1.5rem;
      font-size: 0.9rem;
      width: 100%;
    }
  }
`;

const HeroContainer = styled.div`
  position: relative;
  height: 100vh;
  padding: 128px 0;
  overflow: hidden;
  z-index: 2;

  @media (max-width: 425px) {
    padding: 148px 0px;
  }
`;

const scrollAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  50%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0);
  }
`;

const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  perspective: 1500px;
`;

// 3D objects styling
const ParallaxObj = styled.div`
  position: absolute;
  transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform;
  transform-style: preserve-3d;
  backface-visibility: hidden;

  &.orb {
    border-radius: 50%;
    filter: blur(15px);
    box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
  }

  &.orb1 {
    left: 10%;
    top: 15%;
    width: 350px;
    height: 350px;
    background: radial-gradient(circle, rgba(165, 85, 247, 0.8), transparent 70%);
    animation: ${floatAnimation} 8s ease-in-out infinite;
    z-index: 1;
  }

  &.orb2 {
    right: 20%;
    bottom: 15%;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(56, 189, 248, 0.7), transparent 70%);
    animation: ${floatAnimation2} 12s ease-in-out infinite;
    z-index: 1;
  }

  &.orb3 {
    right: 10%;
    top: 20%;
    width: 250px;
    height: 250px;
    background: radial-gradient(circle, rgba(34, 211, 238, 0.6), transparent 70%);
    animation: ${floatAnimation} 10s ease-in-out infinite;
    z-index: 1;
  }

  &.shape {
    pointer-events: none;
    z-index: 2;
  }
  
  &.shape1 {
    left: 5%;
    top: 35%;
    width: 120px;
    height: 120px;
    background: rgba(126, 34, 206, 0.4);
    border-radius: 10px;
    transform: rotate(45deg);
    animation: ${rotateAnimation} 25s linear infinite;
    box-shadow: 0 0 20px rgba(126, 34, 206, 0.3);
  }
  
  &.shape2 {
    right: 5%;
    bottom: 30%;
    width: 100px;
    height: 100px;
    border: 3px solid rgba(255, 255, 255, 0.4);
    border-radius: 50%;
    animation: ${pulseAnimation} 15s ease-in-out infinite;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.2);
  }
  
  &.shape3 {
    left: 20%;
    bottom: 20%;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    background: rgba(56, 189, 248, 0.3);
    animation: ${floatAnimation} 20s ease-in-out infinite;
    box-shadow: 0 0 30px rgba(56, 189, 248, 0.3);
  }
  
  &.shape4 {
    right: 25%;
    top: 25%;
    width: 70px;
    height: 70px;
    background: rgba(192, 38, 211, 0.3);
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    animation: ${rotateAnimation} 20s linear infinite reverse;
    box-shadow: 0 0 30px rgba(192, 38, 211, 0.3);
  }
  
  &.shape5 {
    left: 40%;
    top: 15%;
    width: 90px;
    height: 90px;
    background: rgba(139, 195, 74, 0.3);
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation: ${floatAnimation2} 15s ease-in-out infinite;
    box-shadow: 0 0 30px rgba(139, 195, 74, 0.3);
  }

  @media (max-width: 768px) {
    &.orb1 {
      width: 200px;
      height: 200px;
    }
    &.orb2 {
      width: 180px;
      height: 180px;
    }
    &.orb3 {
      width: 150px;
      height: 150px;
    }
    &.shape1, &.shape2, &.shape3, &.shape4, &.shape5 {
      transform: scale(0.7);
    }
  }
`;

const IconContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px 0;
  cursor: pointer;

  & svg {
    opacity: 0.7;
    transition: 0.3s;
    animation: ${scrollAnimation} 2s ease infinite;
    filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
  }
  
  & svg:hover {
    transform: translateY(10px);
    opacity: 1;
    transition: 0.3s;
    animation: none;
    filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
  }
`;

// 3D text animation variants
const textVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    rotateX: 10
  },
  visible: { 
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const taglineVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    rotateX: 10
  },
  visible: { 
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { 
    opacity: 0,
    y: 30,
    scale: 0.9
  },
  visible: { 
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: "easeOut"
    }
  }
};

const Hero = () => {
  const parallaxRefs = useRef([]);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const targetX = useRef(0);
  const targetY = useRef(0);
  const scrollY = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  const { theme } = generalStore();

  useEffect(() => {
    // Set animation trigger once component is mounted
    setIsVisible(true);
    
    const handleParallax = () => {
      scrollY.current = window.scrollY;

      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.speed) || 1;
        const scrollOffset = scrollY.current * speed * 0.1;

        el.style.transform = `translateY(${scrollOffset}px)`;
      });
    };

    const handleMouseMove = (event) => {
      targetX.current = (event.clientX - window.innerWidth / 2) * 0.01;
      targetY.current = (event.clientY - window.innerHeight / 2) * 0.01;
    };

    const update = () => {
      mouseX.current += (targetX.current - mouseX.current) * 0.05;
      mouseY.current += (targetY.current - mouseY.current) * 0.05;

      parallaxRefs.current.forEach((el) => {
        if (!el) return;
        const speed = parseFloat(el.dataset.speed) || 1;

        const x = mouseX.current * speed * 30;
        const y = mouseY.current * speed * 30 - scrollY.current * speed * 0.1;
        const rotateX = mouseY.current * speed * 8;
        const rotateY = -mouseX.current * speed * 8;

        el.style.transform = `translate3d(${x}px, ${y}px, 0) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      });

      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleParallax);
    window.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(update);

    return () => {
      window.removeEventListener("scroll", handleParallax);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (section) => {
    const targetElement = document.getElementById(section);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <ParallaxContainer>
        {/* 3D animated background elements */}
        <ParallaxObj 
          className="orb orb1"
          data-speed="3.5"
          ref={(el) => (parallaxRefs.current[0] = el)}
        />
        <ParallaxObj 
          className="orb orb2"
          data-speed="4.5"
          ref={(el) => (parallaxRefs.current[1] = el)}
        />
        <ParallaxObj 
          className="orb orb3"
          data-speed="3"
          ref={(el) => (parallaxRefs.current[2] = el)}
        />
        <ParallaxObj 
          className="shape shape1"
          data-speed="5"
          ref={(el) => (parallaxRefs.current[3] = el)}
        />
        <ParallaxObj 
          className="shape shape2"
          data-speed="4"
          ref={(el) => (parallaxRefs.current[4] = el)}
        />
        <ParallaxObj 
          className="shape shape3"
          data-speed="6"
          ref={(el) => (parallaxRefs.current[5] = el)}
        />
        <ParallaxObj 
          className="shape shape4"
          data-speed="4.5"
          ref={(el) => (parallaxRefs.current[6] = el)}
        />
        <ParallaxObj 
          className="shape shape5"
          data-speed="5.5"
          ref={(el) => (parallaxRefs.current[7] = el)}
        />
        
        <HeroContainer>
          <Container>
            <GradientBackground>
              <ContentWrapper>
                <motion.div
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={textVariants}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <Headline>
                    Business Process Automation with <Highlight>Artificial Intelligence</Highlight>
                  </Headline>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={taglineVariants}
                  style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                >
                  <Tagline>
                    <b>
                      Save time and resources for your business with intelligent solutions from KI-Tech — 
                      your reliable partner in digital transformation
                    </b>
                  </Tagline>
                </motion.div>
                
                <motion.div
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  variants={buttonVariants}
                >
                  <ActionButtons>
                    <GradientButton onClick={() => scrollToSection("contact")}>
                      Get Your Consultation
                    </GradientButton>
                    <LightButton onClick={() => scrollToSection("works")}>
                      View Our Projects
                    </LightButton>
                  </ActionButtons>
                </motion.div>
              </ContentWrapper>
            </GradientBackground>
            <IconContainerCenter>
              <MouseIcon
                height={40}
                width={40}
                click={() => scrollToSection("works")}
                theme={theme}
              />
            </IconContainerCenter>
          </Container>
        </HeroContainer>
      </ParallaxContainer>
    </>
  );
};

export default Hero;
