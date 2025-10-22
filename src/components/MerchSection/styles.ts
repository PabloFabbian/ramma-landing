import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: #0a0a0a;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #333;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 3rem;
  letter-spacing: 8px;
  text-transform: uppercase;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: #FF4747;
  }
`;

export const MerchGrid = styled.div`
  display: flex;
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
  overflow-x: auto;
  overflow-y: hidden;
  padding-bottom: 1rem;
  scroll-behavior: smooth;

  /* Scrollbar personalizado */
  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #FF4747;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #ff5858;
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const MerchItem = styled.div`
  background: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid #333;
  min-width: 300px;
  flex-shrink: 0;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 10px 30px rgba(255, 71, 71, 0.1);
    border-color: #FF4747;
  }

  @media (max-width: 768px) {
    min-width: 280px;
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
  background: #2a2a2a;
`;

export const ItemInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ItemName = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #fff;
  line-height: 1.4;
  margin: 0;
`;

export const ItemPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    font-size: 1.5rem;
    font-weight: 700;
    color: #FF4747;
  }
`;

export const OriginalPrice = styled.span`
  font-size: 1rem !important;
  color: #888 !important;
  text-decoration: line-through;
  font-weight: 400 !important;
`;

export const DiscountBadge = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  background: #FF4747;
  color: #000;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 2;
`;

export const StockIndicator = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #ff6b00;
  color: #000;
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 1px;
  z-index: 2;
`;

export const PaymentInfo = styled.div`
  font-size: 0.8rem;
  color: #888;
  line-height: 1.5;
  
  div {
    margin-bottom: 0.25rem;
  }
  
  strong {
    color: #ccc;
    font-weight: 600;
  }
`;

export const BuyButton = styled.button`
  background: transparent;
  color: #FF4747;
  border: 2px solid #FF4747;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.5rem;

  &:hover {
    background: #FF4747;
    color: #000;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;