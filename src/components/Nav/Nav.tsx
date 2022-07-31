import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
// import React, { useState } from 'react';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import AccountCircle from '@mui/icons-material/AccountCircle';

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "200",
  // textAlign: "center",
  color: "#fff",
  fontFamily: "'Inter', sans-serif",

  "@media (max-width: 700px)": {
    display: "none",
  },
}));

export const BaseStyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "1.7rem",
  fontWeight: "900",
  color: "#fff",
  fontFamily: "'Inter', sans-serif",

  "&:first-letter": {
    color: "#D1094B",
  },

  "@media (max-width: 700px)": {
    fontSize: "2rem",
  },
}));

export default function ButtonAppBar() {
  // const [auth, setAuth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar sx={{ fontSize: "0.5rem", marginTop: "15px" }}>
          {/* {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )} */}

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            NEW ARRIVALS
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            SHOP
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            COLLECTIONS
          </StyledTypography>

          <BaseStyledTypography
            variant="h6"
            sx={{ flexGrow: 8, textAlign: "center" }}
          >
            ShoOp
          </BaseStyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1, display: "flex" }}>
            <SearchIcon /> SEARCH
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            SIGN IN
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            BAG
          </StyledTypography>

          <StyledTypography variant="h6" sx={{ flexGrow: 1 }}>
            <FavoriteBorderIcon sx={{ color: "#fff" }} />
          </StyledTypography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
