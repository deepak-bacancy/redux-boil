import { combineReducers } from "@reduxjs/toolkit";
import { productReducer , selectProductReducer} from "./productReducer";

const combReducer = combineReducers({
    allProducts: productReducer,
    product: selectProductReducer
})

export default combReducer;