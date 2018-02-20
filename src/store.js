/**
 * Created by IATS on 18.02.2018.
 */
import React from 'react';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import InputContainer from './container/InputContainer';
import TaskList from './container/TaskList';

const store = createStore(rootReducer);

export default store;