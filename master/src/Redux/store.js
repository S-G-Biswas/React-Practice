//npm i redux react-redux

import { createStore } from "redux";
import counterReducer from "./reducers/Reducers";

const store = createStore(counterReducer);

export default store;
