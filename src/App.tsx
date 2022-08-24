import "./App.css";
import Bag from "./components/Bag/Bag";
import Home from "./screens/Home";
import { Login } from "./screens/Login";
import { SignUp } from "./screens/SignUp";
import { Product } from "./screens/Product";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Bag" element={<Bag />} />
    </Routes>
  );
}

export default App;
