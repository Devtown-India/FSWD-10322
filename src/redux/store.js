import { createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import reducer from './reducer/index'

const initialState={
    data:[]
}
const store = createStore(reducer, initialState, composeWithDevTools())

export default store