import styled from "styled-components";

export const Wrapper = styled.div`
  width: min(1160px, calc(100% - 3rem));
  margin: 0 auto;

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
  }
`;
