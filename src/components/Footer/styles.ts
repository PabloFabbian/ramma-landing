import styled from "styled-components";

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: 3rem 1.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`;

export const Logo = styled.h2`
  font-size: 1.8rem;
  letter-spacing: 4px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
`;

export const IconLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    transform: translateY(-3px);
  }
`;

export const Copy = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 1rem;
`;
