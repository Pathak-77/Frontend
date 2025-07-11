import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navigation";
import { BrowserRouter, Route, RouterProvider } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import content from "./data/content.json";
import ProductList from "./assets/pages/ProductList/ProductList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadCategories } from "./store/features/category";

const dispatch = useDispatch();

const categories = useEffect(() => {
  fetchCategories()
    .then((res) => {
      useDispatch(loadCategories(res));
    })
    .catch((err) => {
      console.log(err);
    });
},[dispatch]);

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ProductList />
      <Footer content={content?.footer} />
    </BrowserRouter>
  );
}

export default App;
