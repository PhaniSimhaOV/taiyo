import { combineReducers } from "redux";
import contactReducer from "./contactReducer";
import getAllCasesreducer from "./getAllCasesreducer";
import simpleReducer from "./simpleReducer";
export default combineReducers({
  simpleReducer,
  getAllCasesreducer,
  contactReducer,
});
