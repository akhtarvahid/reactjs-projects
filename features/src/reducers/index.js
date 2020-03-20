import { combineReducers } from "redux";
import bestSeller from "./best_seller";
import Page5Reducer from "./Page5Reducer";
export default combineReducers({
  seller: bestSeller,
  page5: Page5Reducer
});
