import Typography from "@mui/material/Typography";
import styled from "styled-components";
import Box from "@mui/material/Box";
import { useState } from "react";
import { ButtonSignup } from "../../screens/SignUp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// -- types ----------------------------------------------------------------- //
export interface ProductProps {
  Name?: string;
  Price?: string;
  Colors?: String[];
  Sizes?: String[];
}

const StyledBox = styled(Box)`
  width: 90%;
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  Div {
    cursor: pointer;
  }
  .activeColor {
    box-sizing: border-box;
    border: 3px solid #fff;
    outline: 2px solid #000f08;
    transition: all 0.3s ease-in-out;
  }
  text-align: center;
  color: #000f08;
  font-family: "Inter", sans-serif;
  animation: all 1s ease-in-out;

  .activeSize {
    background: linear-gradient(
      179.15deg,
      rgba(217, 217, 217, 0) 39.93%,
      rgb(209, 9, 75, 0.6) 99.27%
    );
    border-bottom: 3px solid #d1094b;
    transition: all 0.3s ease-in-out;
  }
`;

export const ProductDetails = ({
  Name,
  Price,
  Colors,
  Sizes,
}: ProductProps) => {
  const [activeColor, setActiveColor] = useState("#DFDED9");
  const [activeSize, setActiveSize] = useState("M");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.3rem",
          color: "#000",
          fontWeight: "500",
        }}
      >
        {Name}
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1.9rem",
          color: "#000",
          fontWeight: "500",
        }}
      >
        ${Price}
        <Typography sx={{ color: "#D8D8D8", fontWeight: "300" }}>
          PRE-ORDER
        </Typography>
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          sx={{ color: "#8C8C8C", fontFamily: "'Inter', sans-serif" }}
        >
          COLOR
        </Typography>
        <StyledBox>
          {Colors?.map((item) => {
            return (
              <Box
                style={{
                  width: "50px",
                  height: "50px",
                  backgroundColor: `${item}`,
                  borderRadius: "50%",
                }}
                onClick={() => setActiveColor(`${item}`)}
                className={activeColor === `${item}` ? "activeColor" : ""}
              />
            );
          })}
        </StyledBox>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <Typography
          sx={{ color: "#8C8C8C", fontFamily: "'Inter', sans-serif" }}
        >
          SIZE
        </Typography>
        <StyledBox>
          {Sizes?.map((item) => {
            return (
              <Box
                style={{
                  width: "30px",
                  height: "30px",
                  fontFamily: "1.5rem",
                  boxSizing: "border-box",
                }}
                onClick={() => setActiveSize(`${item}`)}
                className={activeSize === `${item}` ? "activeSize" : ""}
              >
                {item}
              </Box>
            );
          })}
        </StyledBox>
      </Box>
      <ButtonSignup ProductButton>
        <FavoriteBorderIcon /> ADD TO BAG{" "}
      </ButtonSignup>
    </Box>
  );
};
