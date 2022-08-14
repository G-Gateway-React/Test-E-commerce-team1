import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

type IProps = {
  black?: boolean;
  NoOfItems?: number;
};

const Child = ({ black, NoOfItems }: IProps) => {
  const StyledTypography = styled(Typography)(({ theme }) => ({
    fontSize: "1rem",
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

          <BaseStyledTypography>ShoOp</BaseStyledTypography>

          <StyledTypography sx={{ display: "flex" }}>
            <SearchIcon /> SEARCH
          </StyledTypography>

          <StyledTypography>SIGN IN</StyledTypography>

          <StyledTypography>BAG({NoOfItems})</StyledTypography>

          <StyledTypography>
            <FavoriteBorderIcon />
          </StyledTypography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Child;
