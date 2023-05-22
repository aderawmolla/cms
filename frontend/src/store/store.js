import { createStore } from 'redux';
import rootReducer from '../reducers/rootReducer'; // your root reducer

const store = createStore(rootReducer);

export default store;