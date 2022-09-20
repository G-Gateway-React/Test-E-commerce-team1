import ImgCard, { ImgMaskCard, ImgMasTowkCard } from "./ImgCard";
import * as React from "react";
import { CardStyle, CardMaskStyle } from "./Style";
import Title, { TitleMask } from "./Title";
import { Container } from "@mui/system";
import Footer from "../Footer/Footer";
import Join from "../Join/Join";
import axios from "axios";
import { useAppSelector } from "../../store/index";
import { isUndefined } from "util";

interface Category {
  id: string;
  title: string;
  image: string;
}

const img =
  "https://images.unsplash.com/photo-1661347335413-e4ef4c97d625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80";

const Cards: React.FC = () => {
  const products = useAppSelector(
    (state) => state.productReducer.products
  ).slice(0, 4);
  const [categories, setCategories] = React.useState<Category[]>([]);
  React.useEffect(() => {
    axios
      .get("https://pro-commerce1.herokuapp.com/api/v1/category", {
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhbXlhYTJiQGdtYWlsLmNvbSIsIm5hbWUiOiJMYW15YWEiLCJpYXQiOjE2NjIyNzEwNjV9.OquNvNhbXQlw7Hh9kFsSnrjIfQA8x1WvRc1bsGosJnU",
        },
      })
      .then((res) => {
        setCategories(
          res.data.map((item: any) => {
            return {
              ...item,
              image: img,
            };
          })
        );
      });
  }, []);
  return (
    <>
      <Container>
        <Title />
        <CardStyle>
          {" "}
          {categories.map((cat,index) => (
            <ImgCard title={cat.title} img={cat.image} key={index}/>
          ))}{" "}
        </CardStyle>

        <TitleMask />
        <CardMaskStyle>
          {products.length === 0 ? (
            <>
              <ImgMaskCard />
              <ImgMasTowkCard />
              <ImgMasTowkCard />
              <ImgMasTowkCard />
            </>
          ) : (
            products.map((item: any,index:number) => {
              return <ImgMaskCard title={item.title} url={item.url}  key={index}/>;
            })
          )}
        </CardMaskStyle>
        <Join />
        <Footer />
      </Container>
    </>
  );
};

export default Cards;
