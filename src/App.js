import React, { Component } from 'react';
import './App.css';

import InputContainer from './container/InputContainer';
import TasksList from './container/TasksList';


class App extends Component {
    constructor() {
        super();

        this.state = {
            data: null
        }
    }

    getInputData = (value) => {
        this.setState({data: value});
        console.log(value);
    };

    handleDelete(itemToBeDeleted) {
        console.log(itemToBeDeleted);
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">ToDoList | karane ke lie soochee</header>
                <InputContainer nameButton={'get on'} getInputData={this.getInputData}/>
                <TasksList
                    itemsData = {this.state.data}
                    handleDelete={this.handleDelete}
                    />
            </div>
        );
    }
}

export default App;
