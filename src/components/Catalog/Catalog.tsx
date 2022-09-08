import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CatalogLeft from "./CatalogLeft";
import CatalogRight from "./CatalogRight";
import Nav from "../Nav/Nav";

const Catalog: React.FC = () => {
  return (
    <>
      <Nav black />
      <Container>
        <Grid container spacing={0.5}>
          <Grid item xs={3}>
            <CatalogLeft />
          </Grid>
          <Grid item xs={9}>
            <CatalogRight />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Catalog;
