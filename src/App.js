import React, { Component } from 'react';
import './App.css';
import { InputComponent } from './components/InputComponent';
import { TasksList } from './components/TasksList';


let TasksArray = [{index: 0, value: 'first'}, {index: 1, value: 'second'}, {index: 2, value: 'third'}];






class App extends Component {

    render() {
        return (
            <div className="App">
                <h1 className="App__header">{content.title}</h1>

                <InputComponent buttonName={content.addButton}></InputComponent>
                <TasksList {...content}>
                </TasksList>
            </div>
        );
    }
}

const content = {
    title: 'To Do List',
    addButton: 'Add',
    removeButton: 'Remove',
    taskItem: 'Item N'
};


export default App;
