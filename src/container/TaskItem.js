/* Created by iGlitchime on 10.02.2018. */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {removeItemTodoAction} from '../actions/index';


class TaskItem extends React.Component {
    static propTypes = {
        listValueItem: PropTypes.object.isRequired
    };
    constructor(){
        super();

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDeleteItem = (event) => {
        event.preventDefault();
        this.props.removeItemTodoAction(this.props.listValueItem);
    };
    render() {
        return (
            <div className="App__tasksItem">
                <div className="App__tasksItemTxt">
                    {this.props.listValueItem.item}
                </div>
                <button className="App__tasksItemBtn"
                        onClick={this.handleDeleteItem}>
                    Remove Task
                </button>
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
        removeItemTodoAction: (item) => dispatch(removeItemTodoAction(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);