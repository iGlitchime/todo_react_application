import React, { Component } from 'react';
import './App.css';

import InputContainer from './container/InputContainer';
import TasksList from './container/TasksList';


class App extends Component {
    constructor() {
        super();

        this.state = {
            inputData: [],
            inputValue: ''
        }
    }

    handleSubmit = (value) => {
        let { inputData } = this.state;
        if(value && value.length > 0){
            this.setState({ inputData: [...inputData, value ] });


        }else{
            console.log("Namah Shivaya");
        }
    };

    handleDelete = (itemToBeDeleted) => {
        console.log(itemToBeDeleted);
        var array = this.state.inputData;
        var index = array.indexOf(itemToBeDeleted);
        array.splice(index,1);
        this.setState({ inputData: array});
    };

    render() {
        return (
            <div className="App">
                <header className="App__header">ToDoList | karane ke lie soochee</header>
                <InputContainer nameButton={'get on'} onSubmit={this.handleSubmit}/>
                <TasksList
                    itemsData={this.state.inputData}
                    itemsDelete={this.handleDelete}
                    />
            </div>
        );
    }
}

export default App;
