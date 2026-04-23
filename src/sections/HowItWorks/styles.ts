import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
  background: ${({ theme }) => theme.colors.lightBg};
`;
export const Wrap = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
`;
export const Step = styled.article<{ $reverse?: boolean }>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2rem;
  align-items: center;
  margin-top: 1.3rem;
  direction: ${({ $reverse }) => ($reverse ? "rtl" : "ltr")};
  > * {
    direction: ltr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Badge = styled.span`
  display: inline-grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
`;
