import IsAuthenticateReducer from "../reducer/Authreducer.js";
// redux import
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(IsAuthenticateReducer, applyMiddleware(thunk));
export default store;
