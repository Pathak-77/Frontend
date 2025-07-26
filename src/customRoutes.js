import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ApplicationWrapper from "./assets/pages/ApplicationWrapper";
import ProductListPage from "./assets/pages/ProductList/ProductList";
import ProductDetails from "./assets/pages/ProductDetail/ProductDetails";
import { loadProductBySlug } from "./routes/products";
import AuthenticationWrapper from "./assets/pages/ApplicationWrapper";
import Login from "./assets/pages/Login/Login";
import Register from "./assets/pages/Register";
import OAuth2LoginCallback from "./assets/pages/OAuth2LoginCallback";
import Cart from "./assets/pages/Cart/Cart";
import Account from "./assets/pages/Account/Account";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import Checkout from "./pages/Checkout/Checkout";
import ConfirmPayment from "./pages/ConfirmPayment/ConfirmPayment";
import OrderConfirmed from "./pages/OrderConfirmed/OrderConfirmed";
import Profile from "./pages/Account/Profile";
import Orders from "./pages/Account/Orders";
import Settings from "./pages/Account/Settings";

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
      {
         path:'/cart-items',
         element: <Cart />
        },
        {
          path:'/account-details/',
          element: <ProtectedRoute><Account /></ProtectedRoute>,
          children:[
            {
              path:'profile',
              element:<ProtectedRoute><Profile/></ProtectedRoute>
            },
            {
              path:'orders',
              element:<ProtectedRoute><Orders/></ProtectedRoute>
            },
            {
              path:'settings',
              element:<ProtectedRoute><Settings /></ProtectedRoute>
            }
          ]
         },
         {
          path:'/checkout',
          element:<ProtectedRoute><Checkout /></ProtectedRoute>
         },
         {
          path:'/orderConfirmed',
          element: <OrderConfirmed />
         }
    ]
  },
  {
      path:"/auth/",
      element:<AuthenticationWrapper />,
      children:[
        {
          path:"login",
          element:<Login />
        },
        {
          path:"register",
          element:<Register />
        }
      ]
  },
    {
      path:'/oauth2/callback',
      element:<OAuth2LoginCallback />
    },
    {
      path:'/confirmPayment',
      element:<ConfirmPayment />
    },
    {
      path:'/admin/*',
      element:<ProtectedRoute><AdminPanel /></ProtectedRoute>
    }
]);
export default router;