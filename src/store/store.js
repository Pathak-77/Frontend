import { combineReducers, configureStore } from "@reduxjs/toolkit";
import productReducer from './features/product'

const rootReducer = combineReducers({
    productState: productReducer
})

const store = configureStore({
    reducer : rootReducer
})

export default store;