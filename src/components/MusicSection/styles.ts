import styled from "styled-components";

export const Section = styled.section`
  padding: 6rem 2rem;
  background: #0b0b0b;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  background: ${({ theme }) => theme.gradients.main};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const AlbumsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  width: 100%;
  max-width: 1200px;
`;

export const AlbumCard = styled.div`
  background: #141414;
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(123, 92, 255, 0.3);
  }
`;

export const Cover = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`;

export const Info = styled.div`
  padding: 1.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.text};

  h3 {
    font-size: 1.4rem;
    font-weight: 600;
  }

  span {
    display: block;
    margin-top: 0.5rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.2rem;

  a img {
    width: 28px;
    height: 28px;
    filter: brightness(0) invert(1);
    opacity: 0.8;
    transition: opacity 0.2s ease, transform 0.2s ease;

    &:hover {
      opacity: 1;
      transform: scale(1.1);
    }
  }
`;