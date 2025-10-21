import styled from "styled-components";

const RammaRed = '#FF4747';
const RammaBlack = '#0a0a0a';
const RammaGray = '#1a1a1a';

export const Section = styled.section`
  min-height: 100vh;
  padding: 8rem 2rem 6rem;
  background: ${RammaBlack};
  position: relative;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 5rem;
`;

export const Title = styled.h2`
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: 8px;
  color: transparent;
  -webkit-text-stroke: 2px ${RammaRed};
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1rem;
  color: ${RammaRed};
  letter-spacing: 3px;
  text-transform: uppercase;
  opacity: 0.8;
`;

// TRILOGÍA
export const TrilogySection = styled.div`
  margin-bottom: 8rem;
`;

export const TrilogyDisplay = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

export const AlbumStack = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 968px) {
    height: 400px;
  }
`;

export const StackedAlbum = styled.div<{ $active: boolean; $position: number }>`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  
  transform: 
    translateX(${({ $position }) => $position * 60}px)
    translateY(${({ $position }) => Math.abs($position) * 20}px)
    scale(${({ $active }) => ($active ? 1 : 0.85)})
    rotateY(${({ $position }) => $position * -15}deg);
  
  z-index: ${({ $active, $position }) => ($active ? 10 : 10 - Math.abs($position))};
  filter: ${({ $active }) => ($active ? 'brightness(1)' : 'brightness(0.4)')};

  &:hover {
    filter: brightness(1);
  }

  @media (max-width: 968px) {
    width: 300px;
    height: 300px;
    transform: 
      translateX(${({ $position }) => $position * 40}px)
      translateY(${({ $position }) => Math.abs($position) * 15}px)
      scale(${({ $active }) => ($active ? 1 : 0.8)});
  }
`;

export const AlbumCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const AlbumOverlay = styled.div<{ $active: boolean }>`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1.5rem;
  background: linear-gradient(to top, ${RammaBlack}ee, transparent);
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 0.3s;
`;

export const AlbumTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 900;
  letter-spacing: 3px;
  color: ${RammaRed};
`;

export const AlbumYear = styled.span`
  font-size: 0.875rem;
  color: #fff;
  opacity: 0.7;
`;

export const AlbumDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const DetailTitle = styled.h3`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 900;
  letter-spacing: 4px;
  color: #fff;
`;

export const DetailYear = styled.span`
  font-size: 1.25rem;
  color: ${RammaRed};
  font-weight: 600;
`;

export const DetailDescription = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
`;

export const PlatformLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1rem;
`;

export const PlatformButton = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: ${RammaGray};
  border: 1px solid ${RammaRed}30;
  border-radius: 8px;
  color: #fff;
  font-weight: 600;
  font-size: 0.875rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    background: ${RammaRed};
    border-color: ${RammaRed};
    color: ${RammaBlack};
    transform: translateX(4px);
  }

  & svg {
    width: 24px;
    height: 24px;
    color: inherit; 
    flex-shrink: 0;
  }
`;

export const TrilogyNav = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
`;

export const NavDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => ($active ? '40px' : '12px')};
  height: 12px;
  border-radius: 6px;
  background: ${({ $active }) => ($active ? RammaRed : '#333')};
  border: none;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: ${RammaRed}80;
  }
`;

// EPs
export const EpsSection = styled.div`
  margin-bottom: 6rem;
`;

export const SectionLabel = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 4px;
  color: ${RammaRed};
  margin-bottom: 2rem;
  opacity: 0.9;
`;

export const EpsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const EpCard = styled.a`
  position: relative;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const EpCover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EpInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background: linear-gradient(to top, ${RammaBlack}f0, transparent);
`;

export const EpTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: #fff;
  letter-spacing: 2px;
`;

export const EpYear = styled.span`
  font-size: 0.75rem;
  color: ${RammaRed};
  opacity: 0.8;
`;

export const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${RammaBlack}80;
  opacity: 0;
  transition: opacity 0.3s;

  ${EpCard}:hover & {
    opacity: 1;
  }
`;

export const PlayIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${RammaRed};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 0;
    height: 0;
    border-left: 20px solid ${RammaBlack};
    border-top: 12px solid transparent;
    border-bottom: 12px solid transparent;
  }
`;

// SINGLES
interface SinglesIconProps {
  profilePicUrl: string;
}

export const SinglesSection = styled.a`
  display: block;
  position: relative;
  padding: 3rem;
  background: ${RammaGray};
  border: 2px solid ${RammaRed}30;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s;

  &:hover {
    border-color: ${RammaRed};
    transform: translateY(-4px);
  }

  @media (max-width: 640px) {
    padding: 2rem;
  }
`;

export const SinglesContent = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    gap: 1.5rem;
  }
`;

export const SinglesIcon = styled.div<SinglesIconProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid ${RammaRed};
  flex-shrink: 0;

  /* Estilos para la imagen de fondo */
  background-image: url(${(props) => props.profilePicUrl});
  background-size: cover; /* Asegura que la imagen cubra todo el círculo */
  background-position: center; /* Centra la imagen */
  background-repeat: no-repeat; /* Evita que la imagen se repita */
  
  /* Puedes mantener el color de fondo como fallback o superposición sutil */
  background-color: ${RammaRed}20;

  @media (max-width: 640px) {
    width: 60px;
    height: 60px;
  }
`;

export const SinglesText = styled.div`
  flex: 1;
`;

export const SinglesTitle = styled.h3`
  font-size: clamp(1.25rem, 3vw, 1.75rem);
  font-weight: 900;
  color: #fff;
  letter-spacing: 2px;
  margin-bottom: 0.5rem;
`;

export const SinglesSubtitle = styled.p`
  font-size: clamp(0.875rem, 2vw, 1rem);
  color: ${RammaRed};
  letter-spacing: 1px;
`;

export const SinglesGradient = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background: linear-gradient(90deg, transparent, ${RammaRed}10);
  pointer-events: none;

  @media (max-width: 640px) {
    width: 150px;
  }
`;