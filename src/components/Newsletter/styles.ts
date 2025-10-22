import styled from "styled-components";

const RammaRed = '#FF4747';
const RammaBlack = '#0a0a0a';
const RammaGray = '#1a1a1a';

export const Section = styled.section`
  position: relative;
  padding: 4rem 2rem;
  background: ${RammaBlack};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${RammaRed}40, transparent);
  }
`;

export const BackgroundNoise = styled.div`
  position: absolute;
  inset: 0;
  opacity: 0.02;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
  pointer-events: none;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Eyebrow = styled.span`
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${RammaRed};
  text-transform: uppercase;
`;

export const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  color: #fff;
  letter-spacing: 1px;
`;

export const TitleHighlight = styled.span`
  color: ${RammaRed};
  display: block;
`;

export const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #aaa;
  max-width: 400px;
`;

export const Features = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 0.5rem;
`;

export const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const FeatureIcon = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const FeatureText = styled.span`
  font-size: 0.9rem;
  color: #ccc;
  font-weight: 400;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FormCard = styled.div<{ $submitted: boolean }>`
  background: ${RammaGray};
  border: 1px solid ${({ $submitted }) => ($submitted ? RammaRed : '#333')};
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  transition: all 0.3s ease;

  ${({ $submitted }) => $submitted && `
    box-shadow: 0 0 20px ${RammaRed}30;
  `}

  @media (max-width: 640px) {
    padding: 1.5rem;
  }
`;

export const FormTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: 2px;
  color: ${RammaRed};
  margin-bottom: 1.5rem;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem 0;
  background: transparent;
  border: none;
  border-bottom: 1px solid #333;
  color: #fff;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s;

  &::placeholder {
    color: #666;
  }

  &:focus {
    border-bottom-color: ${RammaRed};
  }

  &:focus + div {
    width: 100%;
  }
`;

export const InputLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: ${RammaRed};
  transition: width 0.3s ease;
`;

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: ${RammaRed};
  border: none;
  border-radius: 4px;
  color: ${RammaBlack};
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;

  &:hover {
    background: ${RammaRed};
    transform: translateY(-1px);
    box-shadow: 0 4px 12px ${RammaRed}40;
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ButtonArrow = styled.span`
  font-size: 1.25rem;
  transition: transform 0.3s;

  ${SubmitButton}:hover & {
    transform: translateX(3px);
  }
`;

export const Privacy = styled.p`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: #666;
  line-height: 1.4;
`;

export const SuccessMessage = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  animation: slideIn 0.4s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const SuccessIcon = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${RammaRed};
  border-radius: 50%;
  font-size: 2rem;
  color: ${RammaBlack};
  font-weight: 700;
`;

export const SuccessTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${RammaRed};
  letter-spacing: 2px;
  margin-bottom: 0.75rem;
`;

export const SuccessText = styled.p`
  font-size: 0.9rem;
  color: #aaa;
  line-height: 1.5;
`;

export const SocialProof = styled.div`
  text-align: center;
`;

export const ProofText = styled.p`
  font-size: 0.9rem;
  color: #666;
`;

export const ProofNumber = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${RammaRed};
`;

export const BottomCTA = styled.div`
  text-align: center;
  padding-top: 3rem;
  border-top: 1px solid #333;
`;

export const CTAText = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1.5rem;
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SocialLink = styled.a`
  padding: 0.5rem 1.5rem;
  background: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  color: #fff;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    border-color: ${RammaRed};
    color: ${RammaRed};
    transform: translateY(-1px);
  }
`;