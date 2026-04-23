import { Button } from "antd";
import styled, { css } from "styled-components";

type Appearance = "primary" | "outline";

export const StyledButton = styled(Button)<{ $appearance: Appearance }>`
  border-radius: ${({ theme }) => theme.radius.pill};
  height: 46px;
  padding: 0 1.25rem;
  font-weight: 600;

  ${({ theme, $appearance }) =>
    $appearance === "primary"
      ? css`
          background: ${theme.colors.secondary};
          border: 1px solid ${theme.colors.secondary};
          color: ${theme.colors.white};
          &:hover {
            transform: translateY(-1px);
            background: #5a52e0 !important;
            border-color: #5a52e0 !important;
            color: ${theme.colors.white} !important;
          }
        `
      : css`
          background: transparent;
          border: 1px solid ${theme.colors.secondary};
          color: ${theme.colors.secondary};
          &:hover {
            transform: translateY(-1px);
            border-color: ${theme.colors.accent} !important;
            color: ${theme.colors.accent} !important;
          }
        `};
`;
