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
import { setLoading } from "./store/features/loader";

//const dispatch = useDispatch();

// const categories = useEffect(() => {
//   dispatch(setLoading(true))
//   fetchCategories()
//     .then((res) => {
//       useDispatch(loadCategories(res));
//     })
//     .catch((err) => {
//       console.log(err);
//     })
//     .finally(
//       dispatch(setLoading(false))
//     );
// },[dispatch]);

function App() {
  return (
    <>
      <Footer content={content?.footer} />
    </>
  );
}

export default App;
