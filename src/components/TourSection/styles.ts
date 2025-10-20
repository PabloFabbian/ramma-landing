import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 2rem;
  background: #0e0e0e;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const DatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

export const DateCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 1.5rem 2rem;
  width: 280px;
  transition: 0.3s ease;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin: 0.5rem 0;
    color: ${({ theme }) => theme.colors.gray};
  }

  span {
    display: block;
    margin-bottom: 0.8rem;
    color: ${({ theme }) => theme.colors.text};
  }

  a {
    display: inline-block;
    padding: 0.5rem 1.2rem;
    background: ${({ theme }) => theme.gradients.main};
    border-radius: 30px;
    color: white;
    font-weight: bold;
    text-decoration: none;
  }

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.1);
  }
`;