import styled, { keyframes } from "styled-components";

const float = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
`;

export const Section = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  background: radial-gradient(circle at top right, rgba(108, 99, 255, 0.18), transparent 50%);
  padding-top: 7rem;
  position: relative;
`;

export const Grid = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Blobs = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    animation: ${float} 6s ease-in-out infinite;
  }
  &::before {
    width: 180px;
    height: 180px;
    background: rgba(0, 212, 170, 0.15);
    left: 5%;
    top: 20%;
  }
  &::after {
    width: 130px;
    height: 130px;
    background: rgba(108, 99, 255, 0.13);
    right: 8%;
    bottom: 18%;
  }
`;
