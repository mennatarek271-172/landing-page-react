import styled from "styled-components";

export const HeaderWrap = styled.header<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ $scrolled }) => ($scrolled ? "rgba(255,255,255,0.88)" : "transparent")};
  backdrop-filter: ${({ $scrolled }) => ($scrolled ? "blur(8px)" : "none")};
  border-bottom: ${({ $scrolled, theme }) =>
    $scrolled ? `1px solid ${theme.colors.border}` : "1px solid transparent"};
  transition: all 0.25s ease-in-out;
`;

export const HeaderInner = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;
  display: flex;
  height: 78px;
  align-items: center;
  justify-content: space-between;
`;

export const Brand = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  border: 0;
  background: transparent;
  font-weight: 800;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`;

export const BrandIcon = styled.span`
  width: 18px;
  height: 18px;
  border-radius: 6px;
  transform: rotate(45deg);
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.secondary}, ${({ theme }) => theme.colors.accent});
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled.button`
  border: 0;
  background: transparent;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileToggle = styled.button`
  border: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  display: none;
  @media (max-width: 768px) {
    display: grid;
    place-items: center;
  }
`;

export const DrawerActions = styled.div`
  display: grid;
  gap: 0.8rem;
  margin-top: 1rem;
`;
