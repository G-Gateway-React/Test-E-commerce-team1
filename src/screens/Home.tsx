import Cards from "../components/Cards/Index";
import Hero from "../components/HeroSection/Hero";
import { useAppDispatch, useAppSelector } from "../store";
import { getProducts } from "../store/product";
import { getCategories } from "../store/categories";
import { useCallback, useEffect } from "react";
function Home() {
  const dispatch = useAppDispatch();
  const fetchProducts = dispatch(getProducts());
  const fetchCategories = dispatch(getCategories());
  return (
    <>
      <Hero />
      <Cards />
    </>
  );
}

export default Home;
