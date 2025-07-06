import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navigation';
import { BrowserRouter, Route, RouterProvider } from 'react-router-dom';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import content from './data/content.json'
import ProductList from './assets/pages/ProductList/ProductList';

function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <ProductList/>
        <Footer content={content?.footer}/>
    </BrowserRouter>
    
  );
}

export default App;
