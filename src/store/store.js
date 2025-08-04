import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product';
import categoryReducer from './features/category';
import loaderReducer from './features/loader';
import cartReducer from './features/cart';
import userReducer from './features/user';
import barReducer  from "./features/bar";


const rootReducer = combineReducers({
        productState: productReducer,
        categoryState: categoryReducer,
        loaderState: loaderReducer,
        cartState: cartReducer,
        userState: userReducer,
        barState: barReducer,
})

const store = configureStore({
    reducer : rootReducer
})

export default store;