import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product'
import categoryReducer from './features/category'
import loaderReducer from './features/loader'


const rootReducer = combineReducers({
        productState: productReducer,
        categoryState: categoryReducer,
        loaderState: loaderReducer
})

const store = configureStore({
    reducer : rootReducer
})

export default store;