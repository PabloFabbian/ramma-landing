import styled from "styled-components";

const RammaRed = '#FF4747';
const RammaBlack = '#0a0a0a';
const RammaGray = '#1a1a1a';

export const Section = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: ${RammaBlack};
  position: relative;

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

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h2`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 900;
  letter-spacing: 12px;
  color: transparent;
  -webkit-text-stroke: 2px ${RammaRed};
  margin-bottom: 0.5rem;
  line-height: 1;
`;

export const Subtitle = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  color: ${RammaRed};
  letter-spacing: 6px;
  font-weight: 700;
  opacity: 0.9;
`;

export const TourList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

interface ShowRowProps {
  $isPast: boolean;
  $isSoldOut: boolean;
}

export const ShowRow = styled.div<ShowRowProps>`
  position: relative;
  display: grid;
  grid-template-columns: 100px 1fr auto;
  align-items: center;
  gap: 2rem;
  padding: 2rem 1.5rem;
  border-bottom: 1px solid ${RammaGray};
  transition: all 0.3s;
  opacity: ${({ $isPast }) => ($isPast ? 0.6 : 1)};

  &:hover {
    background: ${({ $isPast }) => ($isPast ? 'transparent' : `${RammaRed}05`)};
    transform: ${({ $isPast }) => ($isPast ? 'none' : 'translateX(8px)')};
  }

  @media (max-width: 768px) {
    grid-template-columns: 80px 1fr;
    gap: 1rem;
    padding: 1.5rem 1rem;
  }
`;

export const DateBox = styled.div<{ $isSoldOut?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  position: relative;
`;

export const Day = styled.span<{ $isSoldOut?: boolean }>`
  font-size: 2.5rem;
  font-weight: 900;
  color: ${({ $isSoldOut }) => ($isSoldOut ? RammaRed : RammaRed)};
  line-height: 1;
  position: relative;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Month = styled.span<{ $isSoldOut?: boolean }>`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ $isSoldOut }) => ($isSoldOut ? RammaRed : '#666')};
  letter-spacing: 2px;
`;

export const ShowInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const City = styled.h3<{ $isSoldOut?: boolean }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ $isSoldOut }) => ($isSoldOut ? RammaRed : '#fff')};
  letter-spacing: 1px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

export const Venue = styled.p`
  font-size: 1rem;
  color: #888;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 0.875rem;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    justify-content: center;
    margin-top: 0.5rem;
  }
`;

export const SoldOutIconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  margin-right: 0.5rem;
  
  svg {
    width: 14px;
    height: 14px;
  }
`;

export const StatusBadge = styled.span<{ $type: 'past' | 'soldout' }>`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  border-radius: 4px;
  background: ${({ $type }) => ($type === 'soldout' ? 'transparent' : '#333')};
  color: ${({ $type }) => ($type === 'soldout' ? RammaRed : '#666')};
  border: 2px solid ${({ $type }) => ($type === 'soldout' ? RammaRed : '#444')};
  transition: all 0.3s ease;

  ${({ $type }) => $type === 'soldout' && `
    &:hover {
      background: ${RammaRed}10;
    }
  `}

  @media (max-width: 768px) {
    padding: 0.65rem 1.25rem;
    font-size: 0.75rem;
  }
`;

export const TicketButton = styled.a`
  padding: 0.75rem 2.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 2px;
  background: transparent;
  color: ${RammaRed};
  border: 2px solid ${RammaRed};
  border-radius: 4px;
  transition: all 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: ${RammaRed};
    color: ${RammaBlack};
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    padding: 0.65rem 2rem;
    font-size: 0.75rem;
  }
`;

export const RowLine = styled.div<{ $isPast: boolean }>`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 1px;
  background: ${RammaRed};
  transition: width 0.4s ease;

  ${ShowRow}:hover & {
    width: ${({ $isPast }) => ($isPast ? '0' : '100%')};
  }
`;

export const MoreShows = styled.div`
  margin-top: 4rem;
  text-align: center;
  padding: 3rem 0;
  border-top: 1px solid ${RammaGray};
`;

export const MoreShowsText = styled.p`
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: ${RammaRed};
  opacity: 0.6;
  margin-bottom: 1rem;
`;

export const MoreShowsDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.75rem;

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${RammaRed};
    opacity: 0.3;
    animation: pulse 1.5s ease-in-out infinite;

    &:nth-child(2) {
      animation-delay: 0.2s;
    }

    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 0.3;
      transform: scale(1);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
  }
`;