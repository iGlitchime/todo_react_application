/**
 * Created by IATS on 19.02.2018.
 */

import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';

const rootReducer = combineReducers({
    todos: todoReducer
});

export default rootReducer;