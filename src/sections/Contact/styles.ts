import styled from "styled-components";

export const Section = styled.section`
  padding: 5rem 0;
`;
export const Wrap = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 1rem;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const Form = styled.form`
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
  padding: 1.2rem;
  display: grid;
  gap: 0.8rem;
`;
export const ErrorText = styled.span`
  color: #cc2f2f;
  font-size: 0.85rem;
`;
