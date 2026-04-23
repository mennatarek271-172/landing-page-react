import styled from "styled-components";

export const FooterWrap = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding-top: 3.5rem;
`;

export const Top = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr repeat(4, 1fr);
  gap: 1.2rem;
  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ColTitle = styled.h4`
  margin: 0 0 0.9rem;
`;

export const LinkItem = styled.a`
  display: block;
  color: rgba(255, 255, 255, 0.78);
  margin-bottom: 0.55rem;
`;

export const Bottom = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 2rem auto 0;
  padding: 1rem 0 1.4rem;
  border-top: 1px solid rgba(255, 255, 255, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.7rem;
`;
