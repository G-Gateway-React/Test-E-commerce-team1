import React, { useEffect, useState } from "react";
import { baseUrl } from "./API/config";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import Nav from "./components/Nav/Nav";

interface DataNeededFromRes {
  data: {
    id: string;
    title: string;
    price: string;
    images: {
      [index: number]: { url: string};
    };
    categories
: {
      [index: number]: { title: string};
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

export const ForTest = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  // const [catagoryTitles, setCatagoryTitles] = useState([]);
  const [data12, setData] = useState<DataItem[]>([]);

  // console.log(catagoryTitles)

  useEffect(() => {
    const category = async () => {
      const { data } = await axios.get<DataNeededFromRes>(
        `${baseUrl}/product?page=0&perPage=10&price[from]=0&price[to]=10000`,
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
    };
    category();
  }, []);

  // console.log(localStorage.getItem("token"));
  const filter = data12.filter(item => item.CategoryTitle === 'clothes');
  console.log(filter);
  return <>
  <Nav black/>
  <div>ForTest</div>
  </>;
};

export default ForTest;
