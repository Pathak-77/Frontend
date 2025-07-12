import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ApplicationWrapper from "./assets/pages/ApplicationWrapper";
import ProductListPage from "./assets/pages/ProductList/ProductList";
import ProductDetails from "./assets/pages/ProductDetail/ProductDetails";
import { loadProductBySlug } from "./routes/products";

 const router = createBrowserRouter([
  {
    path: "/",
    element: <ApplicationWrapper />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/women",
        element: <ProductListPage categoryType={"WOMEN"} />,
      },
      {
        path: "/men",
        element: <ProductListPage categoryType={"MEN"} />,
      },
      {
        path: "/product/:slug",
        loader: loadProductBySlug,
        element: <ProductDetails />,
      },
    ]
  }
]);
export default router;