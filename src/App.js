import React, { Component } from 'react';
import './App.css';
import { InputComponent } from './components/InputComponent';
import { TasksList } from './components/TasksList';


class App extends Component {


    render() {
        return (
            <div className="App">
                <h1 className="App__header">{content.title}</h1>

                <InputComponent buttonName={content.addButton}></InputComponent>
                <TasksList buttonName={content.removeButton} taskItem={content.taskItem} >
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
