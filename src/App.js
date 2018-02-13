import React, { Component } from 'react';
import './App.css';

import InputContainer from './container/InputContainer';
import TasksList from './container/TasksList';


class App extends Component {
    constructor() {
        super();

        this.state = {
            tasksList: []
        }
    }

    handleTaskAdd = (value) => {
        let { tasksList } = this.state;
        this.setState({tasksList: [...tasksList, value]});
    };

    handleDelete = (itemToBeDeleted) => {
        var array = this.state.tasksList;
        var index = array.indexOf(itemToBeDeleted);
        array.splice(index, 1);
        this.setState({tasksList: array});
    };

    render() {
        return (
            <div className="App">
                <header className="App__header">ToDoList | karane ke lie soochee</header>
                <InputContainer onSubmit={this.handleTaskAdd}/>
                <TasksList
                    tasksList={this.state.tasksList}
                    onItemRemove={this.handleDelete}
                    />
            </div>
        );
    }
}

export default App;
