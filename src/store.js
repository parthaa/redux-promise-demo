import { createStore, applyMiddleware } from "redux";
import reducer from './reducer';
import promise from 'redux-promise-middleware';

const composeStoreWithMiddleware = applyMiddleware(
  promise,
)(createStore)

let store =  composeStoreWithMiddleware(reducer);
export default store