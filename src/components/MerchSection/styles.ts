import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.backgroundAlt};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 3rem;
`;

export const MerchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export const MerchItem = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ItemImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

export const ItemInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const ItemName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 0.5rem;
`;

export const ItemPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-bottom: 1rem;
`;

export const BuyButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
  }
`;