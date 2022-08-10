import ImgCard, { ImgMaskCard, ImgMasTowkCard, Overlay } from "./ImgCard";
import * as React from "react";
import { CardStyle, CardMaskStyle } from "./Style";
import Title, { TitleMask } from "./Title";
import { Container } from "@mui/system";
import Footer from "../Footer/Footer";
import Join from "../Join/Join";
// import { CssBaseline } from '@mui/material';

const Cards: React.FC = () => {
  return (
    <>
      <Container>
        <Title />
        <CardStyle>
          <Overlay> </Overlay>
          <ImgCard /> <ImgCard /> <ImgCard />
          <ImgCard /> <ImgCard /> <ImgCard />
          <ImgCard /> <ImgCard /> <ImgCard />
        </CardStyle>

        <TitleMask />
        <CardMaskStyle>
          <ImgMaskCard /> <ImgMasTowkCard /> <ImgMasTowkCard />{" "}
          <ImgMasTowkCard />
        </CardMaskStyle>
        <Join />
        <Footer />
      </Container>
    </>
  );
};

export default Cards;
