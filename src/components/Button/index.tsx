import { ButtonProps } from "antd";
import { StyledButton } from "./styles";

type Props = Omit<ButtonProps, "variant"> & { variant?: "primary" | "outline" };

function AppButton({ variant = "primary", ...props }: Props): JSX.Element {
  return <StyledButton $appearance={variant} {...props} />;
}

export default AppButton;
