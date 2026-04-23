import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
`;
export const Wrap = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`;
export const Grid = styled.div`
  margin-top: 1.4rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.article`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.1rem;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({ theme }) => theme.shadows.md};
    border-color: ${({ theme }) => theme.colors.accent};
  }
`;
