import { combineReducers } from "redux";
import { flicksReducer } from "./flicksReducer";
import { reviewsReducer } from "./reviewsReducer";
import { searchReducer } from "./searchReducer";

export const rootReducer = combineReducers({
    flicks: flicksReducer,
    reviews: reviewsReducer,
    searchResults: searchReducer
})

