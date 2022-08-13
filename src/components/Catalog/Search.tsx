import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchStyled } from "./CatalogStyle";


const SearchInput: React.FC = () => {
  return (
    <SearchStyled>
      <span>
        <input type="text" placeholder="Search" />

        <button>
          <SearchIcon
            style={{
              color: "#ABA7AF",
              // , fontSize: "medium"
            }}
          />
        </button>
      </span>
    </SearchStyled>
  );
};

export default SearchInput;
