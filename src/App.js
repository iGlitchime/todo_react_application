import React, { Component } from 'react';
import './App.css';
import store from './store';
import * as pageActions from './actions/index';
import InputContainer from './container/InputContainer';
import TaskList from './container/TaskList';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

const initialState = {todos: []};

export class App extends Component {
    constructor(props) {
        super();

        this.todos = props.todos;
        this.removeTodoItem = this.removeTodoItem.bind(this);
    }

    removeTodoItem(item) {
        this.props.removeTodoItem(item);
    };

    render() {
        const todos = this.props.todos;
        //console.log(todos);
        return (
            <div className="App">
                <header className="App__header">ToDoList</header>
                <InputContainer />
                { (todos && todos.length > 0 ) ? (
                    <TaskList/>
                ) : ( 'Add Smth')
                }

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
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);