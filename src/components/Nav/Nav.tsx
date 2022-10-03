import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../store/index";

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);
  const Counter = useAppSelector((state) => state.BagItems.data.Counter);
  const Refs = useAppSelector((state) => state.refs.data.RefsArr);
  useEffect(() => {
    (location.pathname === "/") ? setIsHome(false) : setIsHome(true);
  }, [location]);
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
    cursor: "pointer",
    fontWeight: isHome ? "400" : "200",
    color: isHome ? "#000" : "#fff",
    fontFamily: "'Inter', sans-serif",
    flexGrow: 1,

    "@media (max-width: 700px)": {
      display: "none",
    },
  }));

  const BaseStyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1.7rem",
    fontWeight: "900",
    cursor: "pointer",
    color: isHome ? "#000" : "#fff",

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
    <Box
      sx={{
        flexGrow: 100,
        position: !isHome ? "absolute" : "relative",
        width: "100%",
      }}
    >
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ fontSize: "0.5rem", marginTop: "15px" }}>
          <StyledTypography onClick={()=>{}}>
            NEW ARRIVALS
          </StyledTypography>

          <StyledTypography onClick={() => navigate("/Catalog")}>
            SHOP
          </StyledTypography>

          <StyledTypography onClick={() => navigate("/Catalog")}>
            COLLECTIONS
          </StyledTypography>

          <BaseStyledTypography onClick={() => navigate("/")}>
            ShoOp
          </BaseStyledTypography>

          <StyledTypography
            sx={{ display: "flex" }}
            onClick={() => navigate("/Catalog")}
          >
            <SearchIcon /> SEARCH
          </StyledTypography>
          <StyledTypography onClick={() => navigate("/Login")}>
            SIGN IN
          </StyledTypography>

          <StyledTypography
            onClick={() => navigate("/Bag")}
            sx={{
              color: Counter > 0 ? "#D1094B" : "",
              fontWeight: Counter > 0 ? "500" : "",
            }}
          >
            BAG {Counter > 0 ? `(${Counter})` : ""}
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
