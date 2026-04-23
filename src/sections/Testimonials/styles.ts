import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.lightBg};
`;
export const Wrap = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`;
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  @media (max-width: 768px) {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
  }
`;
export const Card = styled.article`
  background: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.1rem;
  @media (max-width: 768px) {
    min-width: 85%;
    scroll-snap-align: start;
  }
`;
export const Avatar = styled.span`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  display: inline-grid;
  place-items: center;
  color: #fff;
  background: linear-gradient(120deg, #6c63ff, #00d4aa);
  font-weight: 700;
`;
