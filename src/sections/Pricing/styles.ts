import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
`;
export const Wrap = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.article<{ $popular?: boolean }>`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1.2rem;
  box-shadow: ${({ $popular, theme }) => ($popular ? theme.shadows.lg : "none")};
  transform: ${({ $popular }) => ($popular ? "translateY(-10px)" : "none")};
  position: relative;
`;
export const Popular = styled.span`
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(90deg, #6c63ff, #00d4aa);
  color: #fff;
  font-size: 0.8rem;
  padding: 0.28rem 0.7rem;
  border-radius: 999px;
`;
