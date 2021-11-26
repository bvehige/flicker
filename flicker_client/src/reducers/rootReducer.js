import { combineReducers } from "redux";
import { flicksReducer } from "./flicksReducer";
import { reviewsReducer } from "./reviewsReducer";
import { searchReducer } from "./searchReducer";
import { flickReducer } from "./flickReducer";
import { commentsReducer } from "./commentsReducer";

export const rootReducer = combineReducers({
    flicks: flicksReducer,
    reviews: reviewsReducer,
    searchResults: searchReducer,
    flick: flickReducer,
    comments: commentsReducer,
})

