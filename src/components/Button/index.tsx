import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export interface BagButton {
  BagButton?: boolean;
  BagButton132?: boolean;
}

const BagBg =
  "linear-gradient(92.3deg, rgba(0, 0, 0, 0.7) 1.85%,rgba(0, 0, 0, 0.3) 100%)";
const HomeBg =
  "linear-gradient(92.3deg,rgba(255, 255, 255, 0.7) 1.85%,rgba(255, 255,255, 0.3) 100%)";

export const StyledButton = styled(Button)`
  min-width: ${(p: BagButton) => (p.BagButton ? '35%' : '50%')};
  box-sizing: border-box;
  height: 50px;
  padding: 15px 20px;
  font-size: 16px;

  background: ${(p: BagButton) => (p.BagButton ? BagBg : HomeBg)};
  border: 1px solid #fff;
  border-radius: 4px;

  color: #fff;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: all 0.3s ease-in-out;

  :hover {
    color: #d1094b;
    background: linear-gradient(
      92.3deg,
      rgba(0, 0, 0, 0.7) 1.85%,
      rgba(0, 0, 0, 0.3) 100%
    );
    border: 1px solid #d1094b;
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.16);
    border-radius: 4px;
  }
  :active {
    color: #ffffff;
    background: linear-gradient(
      92.3deg,
      rgba(0, 0, 0, 0.7) 1.85%,
      rgba(0, 0, 0, 0.3) 100%
    );
    border-radius: 4px;
    border: none;
    transition: none;
  }
`;

export default function BasicButtons({ ...props }) {
  return <StyledButton>{props.children}</StyledButton>;
}
