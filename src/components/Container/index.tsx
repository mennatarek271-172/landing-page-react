import { ReactNode } from "react";
import { Wrapper } from "./styles";

type Props = { children: ReactNode; as?: keyof JSX.IntrinsicElements };

function Container({ children }: Props): JSX.Element {
  return <Wrapper>{children}</Wrapper>;
}

export default Container;
