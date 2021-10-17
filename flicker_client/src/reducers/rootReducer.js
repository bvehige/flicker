import { combineReducers } from "redux";
import { flicksReducer } from "./flicksReducer";
import { reviewsReducer } from "./reviewsReducer";

export const rootReducer = combineReducers({
    flicks: flicksReducer,
    reviews: reviewsReducer
})