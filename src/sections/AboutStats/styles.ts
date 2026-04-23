import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.lightBg};
`;

export const Grid = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StatGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;
`;

export const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.1rem;
`;
