import React, { Component } from 'react';
import './App.css';

import InputContainer from './container/InputContainer';
import TasksItem from './container/TasksItem';

class App extends Component {
    constructor() {
        super();

        this.state = {
            data: null
        }
    }

    testConsole = (value) => {
        this.setState({ data: value });
        console.log(value);
    };

    drawTaskItems = () => {

    };

    render() {
        return (
            <div>
                <h1>ToDoList</h1>
                <InputContainer nameButton={'get on'} test={this.testConsole} />

                <TasksItem test={this.state.data} />

            </div>
        );
    }
}

export default App;
