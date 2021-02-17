import { combineReducers } from "redux";
import {trips} from './tripsReducer'
import myAccount from './myAccountReducer'
export default combineReducers({trips, myAccount})