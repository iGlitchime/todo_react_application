/**
 * Created by IATS on 18.02.2018.
 */

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;