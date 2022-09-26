import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { SearchStyled } from "./CatalogStyle";
import axios from "axios";
import { baseUrl } from "../../API/config";
import { useAppSelector } from "../../store";
interface DataNeededFromRes {
  data: {
    id: string;
    title: string;
    price: string;
    images: {
      [index: number]: { url: string };
    };
    categories: {
      [index: number]: { title: string };
    };
  }[];
}

interface DataItem {
  id: string;
  title: string;
  price: string;
  url: string;
  CategoryTitle: string;
}

interface SearchProps {
  func: Function;
}

const SearchInput: React.FC<SearchProps> = ({ func }) => {
  const FilteredCategories = useAppSelector(
    (state) => state.categories.FilteredCategoriesReducer.FilteredCategories
  );
  const [searchText, setSearchText] = useState("");
  const [data123, setData] = useState<DataItem[]>([]);
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = ({
    target: { value },
  }) => {
    setSearchText(value);
  };

  useEffect(() => {

    const fetchData = async () => {
      const { data } = await axios.get<DataNeededFromRes>(
        `${baseUrl}/product?page=0&perPage=100&searchTerm=${searchText}&price[from]=0&price[to]=10000&categories=[${
          FilteredCategories.length > 0
            ? `${FilteredCategories.map((e: any) => `"${e}"`)}`
            : FilteredCategories
        }]`,
        {
          headers: {
            Authorization: `${localStorage.getItem("token")}`,
          },
        }
      );
      const formattedData = data.data.map((item) => {
        return {
          id: item.id,
          title: item.title,
          price: item.price,
          url: item.images[0].url,
          CategoryTitle: item.categories[0].title,
        };
      });
      setData(formattedData);
      func(formattedData);
    };

    const timeOut = setTimeout(() => {
      fetchData();
    }, 1);

    return () => {
      clearTimeout(timeOut);
    };
  }, [searchText, FilteredCategories]);
  return (
    <SearchStyled>
      <span>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
        />

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
