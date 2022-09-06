import { Button, Card, Divider } from "@mui/material";
import Nav from "../Nav/Nav";
import BagItem from "./BagItem";
import ClearIcon from "@mui/icons-material/Clear";
import { Container } from "@mui/system";
import styled from "styled-components";
import ImageBagCard from "../../Assets/c.png";
import { CardMedia } from "@material-ui/core";
import Join from "../Join/Join";
import Footer from "../Footer/Footer";
import visa from "../../Assets/visa.png";
import maestro from "../../Assets/maestro.png";
import { StyledButton } from "../Button/index";
import Box from "@mui/material/Box";

import {
  Div,
  Img,
  LeftStyle,
  Line,
  PayStyled,
  RemoveStyle,
  RightStyle,
  TotalStyle,
} from "./BagStyle";

export const DividerStyle = styled(Divider)`
  margin: 30px 0;
`;

export const FatherCard = styled(Card)`
  width: 80%;
  border: none;
  box-shadow: none;
`;

export const ClearStyle = styled(ClearIcon)`
  font-size: 35px;
`;

export const BagCard: React.FC = () => {
  return (
    <FatherCard>
      <CardMedia component="img" image={ImageBagCard} alt="img" />
    </FatherCard>
  );
};

const Bag: React.FC = () => {
  return (
    <>
      <Nav black />
      <Container>
        <Line>
          <LeftStyle>
            <text>BAG</text>
            <small>2 items</small>
          </LeftStyle>
          <RightStyle>
            <ClearIcon sx={{ fontSize: "140%" }} />
            <Button
              variant="text"
              color="inherit"
              sx={{ fontSize: "85%", mt: "-5px" }}
            >
              REMOVE ALL
            </Button>
          </RightStyle>
        </Line>
        <Divider />
        <BagItem
          title={"NIKE SHOES BOYFRIEND PAIRS"}
          price={"USD $340.00"}
          color={"WHITE"}
          size={"42"}
          quantity={1}
          image={<BagCard />}
        />
        <RemoveStyle>
          <ClearIcon sx={{ fontSize: "140%" }} />
          <Button
            variant="text"
            color="inherit"
            sx={{ fontSize: "85%", mt: "-5px" }}
          >
            REMOVE
          </Button>
        </RemoveStyle>
        <Divider sx={{ my: 5 }} />
        <TotalStyle>Total USD $490.00</TotalStyle>
        <Box sx={{ display: "flex", justifyContent: "Center", m: "40px 0" }}>
          <StyledButton BagButton>CHECKOUT</StyledButton>
        </Box>
        <PayStyled>
          <Div>
            <Img src={maestro} alt="maestro" />
          </Div>
          <Div>
            <Img src={visa} alt="visa" />
          </Div>
        </PayStyled>
        <Join />
        <Footer />
      </Container>
    </>
  );
};
export default Bag;
