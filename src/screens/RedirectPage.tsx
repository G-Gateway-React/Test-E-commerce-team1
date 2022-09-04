import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/Nav/Nav";
import { useNavigate } from "react-router-dom";

export const RedirectPage = () => {
  const navigate = useNavigate();

  let location = useLocation();
  let [counter, SetCounter] = useState(5);
  const navigatee = () => navigate("/");
  useEffect(() => {
    setTimeout(function () {
      if (counter != 0) SetCounter(counter - 1);
    }, 1000);

    {
      counter != 0 ? console.log("first") : navigatee();
    }
  }, [counter]);

  return (
    <Container maxWidth="xl">
      <Nav black />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.5rem",
            fontWeight: "900",
          }}
        >
          No match for {location.pathname}
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.5rem",
            fontWeight: "900",
          }}
        >
          Redirect To Home Page Within {counter} seconds ...
        </Typography>
      </Box>
    </Container>
  );
};
