import styled from "styled-components";

export const Container = styled.section`
  background: ${({ theme }) => theme.colors.backgroundAlt};
  padding: 6rem 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 1.1rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Input = styled.input`
  padding: 0.8rem 1.2rem;
  border-radius: 30px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  background: ${({ theme }) => theme.colors.cardBackground};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  width: 280px;
  outline: none;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 0.8rem 1.8rem;
  border: none;
  border-radius: 30px;
  background: ${({ theme }) => theme.gradients.main};
  color: white;
  cursor: pointer;
  font-weight: 600;
  transition: transform 0.25s ease, opacity 0.25s ease;

  &:hover {
    transform: scale(1.05);
    opacity: 0.9;
  }
`;

export const Message = styled.p`
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
  font-weight: 500;
  font-size: 1rem;
  animation: fadeIn 0.5s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;