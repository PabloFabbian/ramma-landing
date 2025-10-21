import styled, { css } from "styled-components";

const RammaRed = "#FF4747";
const RammaBlack = "#0a0a0a";

export const Navbar = styled.nav<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  z-index: 100;
  transition: all 0.4s ease;

  ${({ $scrolled }) =>
    $scrolled
      ? css`
          background: rgba(10, 10, 10, 0.85);
          backdrop-filter: blur(10px);
          box-shadow: 0 0 20px ${RammaRed}20;
        `
      : css`
          background: transparent;
        `};

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

export const Logo = styled.h2`
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: 4px;
  color: ${RammaRed};
  text-transform: uppercase;
  z-index: 20;
  user-select: none;
  cursor: default;
`;

export const MobileSectionIndicator = styled.span`
  display: none;
  font-size: 0.875rem;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${RammaRed};
  text-transform: uppercase;
  opacity: 0.9;

  @media (max-width: 768px) {
    display: block;
    position: absolute;
    left: 50%;
    margin-left: 3.25rem;
    transform: translateX(-50%);
    z-index: 5;
    pointer-events: none;
  }
`;

export const NavLinks = styled.div<{ $open: boolean }>`
  display: flex;
  gap: 2.5rem;
  transition: all 0.3s ease;

  a {
    color: white;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 0.875rem;
    letter-spacing: 2px;
    position: relative;
    transition: color 0.3s;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0%;
      height: 2px;
      background: ${RammaRed};
      transition: width 0.3s;
    }

    &:hover {
      color: ${RammaRed};

      &::after {
        width: 100%;
      }
    }

    &.active {
      color: ${RammaRed};

      &::after {
        width: 100%;
      }
    }
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${RammaBlack};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    transform: ${({ $open }) =>
    $open ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.4s ease;
    z-index: 15;

    a {
      font-size: 1.25rem;
    }
  }
`;

export const MenuButton = styled.button<{ $open: boolean }>`
  display: none;
  position: relative;
  width: 30px;
  height: 22px;
  padding: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 30;

  span {
    position: absolute;
    left: 50%;
    height: 3px;
    width: 30px;
    background: ${RammaRed};
    border-radius: 2px;
    transform: translateX(-50%);
    transition: all 0.3s ease;
  }

  span:nth-child(1) {
    top: ${({ $open }) => ($open ? "50%" : "calc(50% - 9px)")};
    transform: ${({ $open }) => ($open ? "translateX(-50%) translateY(-50%) rotate(45deg)" : "translateX(-50%)")};
  }

  span:nth-child(2) {
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: ${({ $open }) => ($open ? "0" : "1")};
  }

  span:nth-child(3) {
    top: ${({ $open }) => ($open ? "50%" : "calc(50% + 9px)")};
    transform: ${({ $open }) => ($open ? "translateX(-50%) translateY(-50%) rotate(-45deg)" : "translateX(-50%) translateY(-50%)")};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;