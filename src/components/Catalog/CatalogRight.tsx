import React, { useState } from "react";
import SearchInput from "./Search";
import Tops from "./Tops";
import PaginationCom from "./Pagination";
import { CardStyle } from "./CatalogStyle";
import { useLocation, useNavigate } from "react-router-dom";

const CatalogRight: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const myarr = (n: any) => setData(n);

  // const Fcategories = useAppSelector(
  //   (state) => state.categories.FilteredCategoriesReducer.FilteredCategories
  // );
  // const categories = useAppSelector(
  //   (state) => state.categories.CategoriesReducer.categories
  // );
  // const products = useAppSelector((state) => state.productReducer.products);

  // const a = Fcategories.map((e: any) =>
  //   categories.filter((i: any) => i.id === e)
  // );

  // console.log(a);
  return (
    <>
      <SearchInput func={(abc: any) => myarr(abc)} />
      <CardStyle>
        {data.map((e: any) => {
          return (
            <div
              onClick={() => {
                // location.pathname = `/Product/${e.id}`;
                navigate(`/Product`, { state: e });
              }}
            >
              <Tops price={e.price} img={e.url} />
            </div>
          );
        })}
      </CardStyle>

      {/* {a.map((e: any) => {
        return (
          <>
            <CatalogTitle>{e[0].title}</CatalogTitle>
            <CardStyle>
            {products.map((i: any) => {
              if (e[0].title === i.CategoryTitle) {
                return <Tops price={i.price} img={i.url} />;
              } 
            })}</CardStyle>
          </>
        );
      })} */}
      {/* <PaginationCom /> */}
    </>
  );
};

export default CatalogRight;
