import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CatalogLeft from "./CatalogLeft";
import CatalogRight from "./CatalogRight";

const Catalog: React.FC = () => {
  return (
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
  );
};

export default Catalog;
