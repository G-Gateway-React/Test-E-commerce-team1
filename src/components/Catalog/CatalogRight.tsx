import React from "react";
import SearchInput from "./Search";
import Tops from "./Tops";
import Shirts from "./Shirts";
import PaginationCom from "./Pagination";
import { CardStyle, CatalogTitle } from "./CatalogStyle";

const CatalogRight: React.FC = () => {
  return (
    <>
      <SearchInput />

      <CatalogTitle>TOPS</CatalogTitle>
      <CardStyle>
        <Tops /> <Tops /> <Tops />
        <Tops /> <Tops /> <Tops />
        <Tops /> <Tops /> <Tops />
      </CardStyle>
      <CatalogTitle>SHIRTS</CatalogTitle>
      <CardStyle>
        <Shirts /> <Shirts /> <Shirts /> <Shirts /> <Shirts /> <Shirts />
        <Shirts /> <Shirts /> <Shirts />
      </CardStyle>
      <PaginationCom />
    </>
  );
};

export default CatalogRight;
