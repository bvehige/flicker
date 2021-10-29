import { combineReducers } from "redux";
import { flicksReducer } from "./flicksReducer";
import { reviewsReducer } from "./reviewsReducer";
import { searchReducer } from "./searchReducer";
import { flickReducer } from "./flickReducer";

export const rootReducer = combineReducers({
    flicks: flicksReducer,
    reviews: reviewsReducer,
    searchResults: searchReducer,
    flick: flickReducer
})

