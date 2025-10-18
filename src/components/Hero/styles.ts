import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
  filter: brightness(0.4);
`;

export const Content = styled.div`
  text-align: center;
  color: white;
  z-index: 2;

  h1 {
    font-size: 6rem;
    font-weight: 700;
    letter-spacing: 8px;
  }

  p {
    margin-top: 1rem;
    font-size: 1.2rem;
    letter-spacing: 4px;
  }
`;

export const Button = styled.button`
  margin-top: 2rem;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  background: ${({ theme }) => theme.gradients.main};
  color: white;
  transition: 0.3s;

  &:hover {
    opacity: 0.85;
    transform: scale(1.05);
  }
`;