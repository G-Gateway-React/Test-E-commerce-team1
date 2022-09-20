import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import ImageCard from "../../Assets/c.png";
import ImageMaskCard from "../../Assets/m1.png";
import ImagMasTowkCard from "../../Assets/m2.png";
import styled from "@emotion/styled";

export const FatherCard = styled(Card)`
  /* width: 32%; */
  border: none;
  box-shadow: none;
  transition: all 0.5s ease-in-out;
  position: relative;
  cursor: pointer;
  span {
    position: absolute;
    top: 80%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 60px;
    color: #fff;
    padding: 100% 0;
    opacity: 0;
    @media screen and (max-width: 992px) {
      font-size: 20px;
    }
    @media screen and (max-width: 600px) {
      font-size: 14px;
    }
  }
  span:hover {
    opacity: 1;
  }
  text {
    position: absolute;
    top: 80%;
    transform: translateY(-50%);
    width: 100%;
    display: flex;
    justify-content: center;
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 44px;
    color: #fff;
    padding: 100% 0;
    opacity: 0;
    @media screen and (max-width: 992px) {
      font-size: 18px;
    }
    @media screen and (max-width: 600px) {
      font-size: 12px;
    }
  }
  text:hover {
    opacity: 1;
  }
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

interface ImgCardProps {
  title: string;
  img: string;
}
const ImgCard: React.FC<ImgCardProps> = ({ img, title }) => {
  return (
    <FatherCard>
      <CardMedia component="img" image={img} alt="img" />
      <span>{title}</span>
    </FatherCard>
  );
};

type IProps = {
  title?: string;
  url?: string;
};

export const ImgMaskCard = ({ title, url }: IProps) => {
  return (
    <FatherCard>
      <CardMedia
        component="img"
        image={(url && url) || ImageMaskCard}
        alt="img"
      />
      <text>{(title && title) || "MORE INFO"}</text>
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

export default ImgCard;
