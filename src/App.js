import React, { Component } from 'react';
import InputContainer from './container/InputContainer';
import TaskList from './container/TaskList';


import './App.css';


export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App__header">ToDoList</header>
                <InputContainer />
                <TaskList/>
            </div>
        );
    }
}