import styled, { keyframes } from "styled-components";

const RammaRed = '#FF4747';
const RammaBlack = '#0a0a0a';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  from { width: 0; }
  to { width: 60px; }
`;

const scroll = keyframes`
  0%, 20% { transform: translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateY(12px); opacity: 0; }
`;

export const Container = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background: ${RammaBlack};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 20%, ${RammaBlack}90 100%);
    z-index: 1;
    pointer-events: none;
  }
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translate(-50%, -50%);
  object-fit: cover;
  filter: brightness(0.5);
  will-change: auto;
`;

export const Content = styled.div`
  position: relative;
  text-align: center;
  color: #fff;
  z-index: 2;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: clamp(4rem, 15vw, 10rem);
  font-weight: 900;
  letter-spacing: clamp(8px, 4vw, 25px);
  margin: 0;
  line-height: 0.9;
  
  color: transparent;
  -webkit-text-stroke: 3px ${RammaRed};
  
  filter: drop-shadow(0 0 20px ${RammaRed}80);
  animation: ${fadeUp} 0.8s ease-out;
  
  @media (max-width: 768px) {
    -webkit-text-stroke: 2px ${RammaRed};
  }
`;

export const Subtitle = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin: 2rem 0 0;
  
  font-size: clamp(0.875rem, 2.5vw, 1.25rem);
  font-weight: 600;
  color: ${RammaRed};
  letter-spacing: clamp(3px, 1.5vw, 8px);
  text-transform: uppercase;
  
  animation: ${fadeUp} 0.8s ease-out 0.2s backwards;
`;

export const Line = styled.span`
  height: 2px;
  background: ${RammaRed};
  animation: ${slideIn} 0.6s ease-out 0.4s backwards;
  
  @media (max-width: 640px) {
    width: 30px !important;
  }
`;

export const Button = styled.button`
  margin-top: 3rem;
  padding: 1.25rem 3.5rem;
  font-size: 1rem;
  font-weight: 700;
  
  border: 2px solid ${RammaRed};
  background: transparent;
  color: ${RammaRed};
  
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  
  transition: all 0.3s ease;
  animation: ${fadeUp} 0.8s ease-out 0.4s backwards;
  
  &:hover {
    background: ${RammaRed};
    color: ${RammaBlack};
    transform: translateY(-2px);
  }
  
  @media (max-width: 640px) {
    padding: 1rem 2.5rem;
    font-size: 0.875rem;
  }
`;

export const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  
  width: 24px;
  height: 40px;
  border: 2px solid ${RammaRed}60;
  border-radius: 12px;
  
  &::before {
    content: '';
    position: absolute;
    top: 8px;
    left: 50%;
    width: 4px;
    height: 8px;
    background: ${RammaRed};
    border-radius: 2px;
    transform: translateX(-50%);
    animation: ${scroll} 2s ease-in-out infinite;
  }
`;