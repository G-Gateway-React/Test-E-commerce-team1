import { pink } from "@mui/material/colors";
import { Checkbox, Link, styled } from "@mui/material";
import React from "react";
import { LeftStyle } from "./CatalogStyle";

export const LinkCat = styled(Link)`
  text-decoration: none;
  color: #000f08;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface ImgCardProps {
  title: string;
}
const CheckBox: React.FC<ImgCardProps> = ({ title }) => {
  return (
    <>
      <LeftStyle>
        <span>
          {/* <LinkCat href="">      </LinkCat> */}
          <Checkbox
            {...label}
            sx={{
              color: pink[800],
              "&.Mui-checked": {
                color: pink[600],
              },
            }}
          />
          {title}
        </span>
      </LeftStyle>
    </>
  );
};

export default CheckBox;
