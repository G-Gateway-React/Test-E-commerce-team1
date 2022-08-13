import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import img1 from "../../Assets/mask.png";
import Button from "../Button";
import Nav from "../Nav/Nav";

export const BoxContent = styled(Box)`
  width: 35%;
  // background:  #f00 ;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-left: 25px;
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 200;
  line-height: 30px;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 200;
  }

  span {
    color: #d1094b;
  }
  h1,
  br {
    font-size: 60px;
    font-weight: 500;
    margin: 0;
    padding: 0;
    line-height: 80%;
    letter-spacing: 0.5px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    align-items: center;
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
  }
`;

function Hero() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        backgroundImage: `url(${img1})`,
        height: "100vh",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Box
        sx={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "start",
        }}
      >
        <BoxContent>
          <h1>
            <span>NEW</span>
            <br />
            COLLECTION
          </h1>

          <h3>
            Our Easiest Chuck-On-And-Go Staples Come With A Serious Style
            Heritage That’s Liberating, Sexy, Comfy And Supremely Cool.
          </h3>

          <Button>SHOP NEW ARRIVALS</Button>
        </BoxContent>
      </Box>
    </Container>
  );
}

export default Hero;
