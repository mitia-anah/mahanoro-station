import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import State from './State'
// import reducer from './reducers/rootReducer';


const store = createStore(reducers, State, applyMiddleware(thunk));
export default store