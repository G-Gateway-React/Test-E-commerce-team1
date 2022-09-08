import { Checkbox, Link, styled } from "@mui/material";
import React from "react";
import RangeSlider from "./Slider";
import { pink } from "@mui/material/colors";
import {
  CatalogTitle,
  //   CheckboxStyle,
  FilterStyle,
  FilterTitle,
  LeftStyle,
} from "./CatalogStyle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import axios from "axios";
import CheckBox from "./Checkbox";

export const LinkCat = styled(Link)`
  text-decoration: none;
  color: #000f08;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

interface Catalog {
  id: string;
  title: string;
}

const CatalogLeft: React.FC = () => {
  const [catalog, setCatalog] = React.useState<Catalog[]>([]);
  React.useEffect(() => {
    axios
      .get("https://pro-commerce1.herokuapp.com/api/v1/category", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbXlhYTJiQGdtYWlsLmNvbSIsIm5hbWUiOiJMYW15YWEiLCJpYXQiOjE2NjIyNzEwNjV9.OquNvNhbXQlw7Hh9kFsSnrjIfQA8x1WvRc1bsGosJnU",
        },
      })
      .then((res) => {
        console.log(res);
        setCatalog(
          res.data.map((item: any) => {
            return {
              ...item,
            };
          })
        );
      });
  }, []);

  return (
    <>
      <CatalogTitle>CATEGORIES</CatalogTitle>
      {catalog.map((cat) => (
        <CheckBox title={cat.title} />
      ))}
      {/* <LeftStyle>
        <span>
          <LinkCat href="/">
            <Checkbox
              {...label}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
              defaultChecked
            />
            TOPS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            TEES AND TANKS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox
              {...label}
              sx={{
                color: pink[800],
                "&.Mui-checked": {
                  color: pink[600],
                },
              }}
              defaultChecked
            />
            SHIRTS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} color="success" />
            SHOES
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            JACKETS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            KNITWEAR
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            JUMPSUITS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            BOTTOMS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            INTIMATES
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            SHORTS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            JEANS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            SKIRTS
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            SALE
          </LinkCat>
        </span>
        <span>
          <LinkCat>
            <Checkbox {...label} />
            SHOP ALL
          </LinkCat>
        </span>
      </LeftStyle> */}

      <FilterTitle>FILTERS</FilterTitle>
      <FilterStyle>
        <span>
          <AddIcon /> SIZE
        </span>
        <span>
          <RemoveIcon /> PRICE
        </span>
        {/* <span></span> */}
        <RangeSlider />

        <span>
          <AddIcon /> COLOR
        </span>
        <span> </span>
        <span>
          <AddIcon /> FABRIC
        </span>
        <span> </span>
        <span>SORT: NEWEST</span>
      </FilterStyle>
    </>
  );
};

export default CatalogLeft;
