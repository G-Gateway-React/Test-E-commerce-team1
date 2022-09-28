import { Button, Card, Divider } from "@mui/material";
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
import { ResetBagItem } from "../../store/bag";
import { useAppDispatch, useAppSelector } from "../../store";

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
import toast from "react-hot-toast";
import { useState } from "react";

export const DividerStyle = styled(Divider)`
  margin: 30px 0;
`;

export const FatherCard = styled(Card)`
  width: 400px;
  height: 450px;
  border: none;
  box-shadow: none;
`;
// export const CardMediaStyle = styled(CardMedia)`
//   width: 100%;
// `;
export const ClearStyle = styled(ClearIcon)`
  font-size: 35px;
`;
interface BagProps {
  url: string;
}
export const BagCard: React.FC<BagProps> = ({ url }) => {
  return (
    <FatherCard>
      <CardMedia component="img" image={url} alt="img" />
    </FatherCard>
  );
};

const Bag: React.FC = () => {
  const dispatch = useAppDispatch();
  const Counter = useAppSelector((state) => state.BagItems.data.Counter);
  const auth = useAppSelector((state) => state.auth.user?.name);
  const Items = useAppSelector((state) => state.BagItems.data.BagItemsArr);
  // let [sum,setSum]= useState(0);
  let sum = 0;
  Items.map((w: any) => (sum += Number(w.price)));
  const handleDelete = (id: string, source: boolean) => {
    if (source) {
      dispatch(ResetBagItem([]));
    } else {
      const clone = [...Items];
      clone.splice(
        clone.findIndex((o: any) => o.id === id),
        1
      );
      dispatch(ResetBagItem(clone));
      // }
    }
  };
  return (
    <>
      <Container maxWidth="md">
        <Line>
          <LeftStyle>
            <text>BAG</text>
            <small>{Counter} items</small>
          </LeftStyle>
          {Items.length > 0 ? (
            <RightStyle>
              <ClearIcon sx={{ fontSize: "140%" }} />
              <Button
                variant="text"
                color="inherit"
                sx={{ fontSize: "85%", mt: "-5px" }}
                onClick={() => handleDelete("", true)}
              >
                REMOVE ALL
              </Button>
            </RightStyle>
          ) : (
            ""
          )}
        </Line>
        <Divider />
        {Items.length > 0
          ? Items.map((item: any) => {
              return (
                <>
                  <BagItem
                    title={item.title}
                    price={item.price}
                    color={"WHITE"}
                    size={"42"}
                    quantity={1}
                    image={<BagCard url={item.url} />}
                  />
                  <RemoveStyle>
                    <ClearIcon sx={{ fontSize: "140%" }} />
                    <Button
                      variant="text"
                      color="inherit"
                      sx={{ fontSize: "85%", mt: "-5px" }}
                      onClick={() => handleDelete(item.id, false)}
                    >
                      REMOVE
                    </Button>
                  </RemoveStyle>
                </>
              );
            })
          : "No Products Added"}

        <Divider sx={{ my: 5 }} />
        <TotalStyle>
          Total: {Items.length > 0 ? `USD $${sum}` : "0$"}
        </TotalStyle>
        <Box sx={{ display: "flex", justifyContent: "Center", m: "40px 0" }}>
          <StyledButton
            BagButton
            onClick={() => {
              if (auth != null) {
                Items.length > 0
                  ? toast.success("Done")
                  : toast.error("Add Some Products to your Bag, Plz");
              } else toast.error("SIGN IN ... Plz");
            }}
          >
            CHECKOUT
          </StyledButton>
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
