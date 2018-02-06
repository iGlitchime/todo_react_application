import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="App__header">{content.title}</h1>

                <InputComponent name='kek'></InputComponent>
                <TasksList counter='6'></TasksList>

            </div>
        );
    }
}

function InputComponent(content){
    return (
        <div className="App__child">
            <div className="App__input">
                <input className="App__input-field" type="text" placeholder="enter smth"/>
            </div>
            <button className="App__input-button">{content.addButton}</button>
        </div>
    );
}

function TasksList(content){
    return (
        <div className="App__tasksList">
            <TasksItem >{content.taskItem}</TasksItem>
        </div>
    );
}

function TasksItem(content){
    return(
        <div className="App__tasksItem">
            <div className="App__tasksItemTxt">...</div>
            <button className="App__tasksItemBtn">{content.removeButton}</button>
        </div>
    );

}
const content = {
    title: 'To Do List',
    addButton: 'Add',
    removeButton: 'Remove',
    taskItem: 'Item N'
};



export default App;
