import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputContainer from './container/InputContainer';
import TaskList from './container/TaskList';

import './App.css';


class App extends Component {
    constructor(props) {
        super();

        this.todos = props.todos;
    }

    render() {
        const todos = this.props.todos;
        return (
            <div className="App">
                <header className="App__header">ToDoList</header>
                <InputContainer />
                { (todos && todos.length > 0 ) ? ( <TaskList/> ) : ( 'Add Smth') }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
function mapDispatchToProps(dispatch) {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);