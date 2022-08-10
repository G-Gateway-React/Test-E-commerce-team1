import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ImageCard from "../../Assets/c.png";
import ImageMaskCard from "../../Assets/m1.png";
import ImagMasTowkCard from "../../Assets/m2.png";
import styled from "@emotion/styled";

export const FatherCard = styled(Card)`
  width: 32%;
  border: none;
  box-shadow: none;
  transition: all 0.5s ease-in-out;
  :hover {
    filter: grayscale(80%);
  }
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
`;
const ImgCard: React.FC = () => {
  return (
    <FatherCard>
      <CardMedia component="img" image={ImageCard} alt="img" />
      {/*  <text>T-Shirts</text> */}
    </FatherCard>
  );
};

export default ImgCard;

export const ImgMaskCard: React.FC = () => {
  return (
    <FatherCard>
      <CardMedia component="img" image={ImageMaskCard} alt="img" />
    </FatherCard>
  );
};

export const ImgMasTowkCard: React.FC = () => {
  return (
    <FatherCard>
      <CardMedia component="img" image={ImagMasTowkCard} alt="img" />
    </FatherCard>
  );
};
