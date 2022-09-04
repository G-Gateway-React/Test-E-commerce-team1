import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

type IProps = {
  black?: boolean;
  NoOfItems?: number;
};

const Nav = ({ black, NoOfItems }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === "/") {
      setIsHome(true);
      console.log("151515");
    } else {
      setIsHome(false);
      console.log("121212");
    }
  }, [location]);
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: black ? "400" : "200",
    color: black ? "#000" : "#fff",
    fontFamily: "'Inter', sans-serif",
    flexGrow: 1,

    "@media (max-width: 700px)": {
      display: "none",
    },
  }));

  const BaseStyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1.7rem",
    fontWeight: "900",
    color: black ? "#000" : "#fff",

    flexGrow: 8,
    textAlign: "center",

    fontFamily: "'Inter', sans-serif",
    "&:first-letter": {
      color: "#D1094B",
    },

    "@media (max-width: 700px)": {
      fontSize: "2rem",
    },
  }));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ fontSize: "0.5rem", marginTop: "15px" }}>
          <StyledTypography>NEW ARRIVALS</StyledTypography>

          <StyledTypography>SHOP</StyledTypography>

          <StyledTypography>COLLECTIONS</StyledTypography>

          <BaseStyledTypography onClick={() => navigate("/")}>
            ShoOp
          </BaseStyledTypography>

          <StyledTypography sx={{ display: "flex" }}>
            <SearchIcon /> SEARCH
          </StyledTypography>
          <StyledTypography onClick={() => navigate("/Login")}>
            SIGN IN
          </StyledTypography>

          <StyledTypography onClick={() => navigate("/Bag")}>
            BAG({NoOfItems})
          </StyledTypography>

          <StyledTypography>
            <FavoriteBorderIcon />
          </StyledTypography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
