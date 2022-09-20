import { Checkbox, Link, styled } from "@mui/material";
import React, { useState } from "react";
import RangeSlider from "./Slider";
import { pink } from "@mui/material/colors";
import {
  CatalogTitle,
  FilterStyle,
  FilterTitle,
  LeftStyle,
} from "./CatalogStyle";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useAppSelector, useAppDispatch } from "../../store";
import { setFilteredCategories } from "../../store/categories";

export const LinkCat = styled(Link)`
  text-decoration: none;
  color: #000f08;
`;

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CatalogLeft: React.FC = () => {
  const dispatch = useAppDispatch();
  const FilteredCategories = useAppSelector(
    (state) => state.categories.FilteredCategoriesReducer.FilteredCategories
  );
  const [Checked, setChecked] = useState<any>([]);

  const handleChange = (id: string) => {
    const currentIndex = FilteredCategories.indexOf(id);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(id);
    } else {
      dispatch(setFilteredCategories(newChecked.splice(currentIndex, 1)));
    }

    setChecked(newChecked);
    dispatch(setFilteredCategories(newChecked));
  };
  const categories = useAppSelector(
    (state) => state.categories.CategoriesReducer.categories
  );

  return (
    <>
      <CatalogTitle>CATEGORIES</CatalogTitle>
      <LeftStyle>
        {categories.map((category: any) => {
          return (
            <span>
              <LinkCat>
                <Checkbox
                  {...label}
                  sx={{
                    "&.Mui-checked": {
                      color: pink[600],
                    },
                  }}
                  onChange={() => handleChange(category.id)}
                  checked={
                    FilteredCategories.indexOf(category.id) === -1
                      ? false
                      : true
                  }
                />
                {category.title}
              </LinkCat>
            </span>
          );
        })}

        {/* <span>
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
        </span> */}
      </LeftStyle>

      <FilterTitle>FILTERS</FilterTitle>
      <FilterStyle>
        <span>
          <AddIcon /> SIZE
        </span>
        <span>
          <RemoveIcon /> PRICE
        </span>
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
