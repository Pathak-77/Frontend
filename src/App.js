import logo from "./logo.svg";
import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import Items from "./components/Items/Items";
import Footer from "./components/Footer/Footer";
import content from "./data/content.json";
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
    <HeroSection/>
    <Items/>
    <Footer content={content?.footer} />
    </>
  );
}

export default App;
