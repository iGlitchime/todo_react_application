/* Created by IATS on 10.02.2018. */
import React from 'react';
import PropTypes from 'prop-types';


export default class TasksItem extends React.Component {
    static propTypes = {
        TasksListThis: PropTypes.array.isRequired,

    };

    render() {
        console.log(this.props.TasksListThis);
        console.log(this.props.listValue);
        let listValue = this.props.listValue;
        return (
            <div className="App__tasksItem">
                <div className="App__tasksItemTxt">{listValue}</div>
                <button className="App__tasksItemBtn"
                        onClick={ this.props.TasksListThis.props.itemsDelete.bind(this.props.TasksListThis, this.props.listValue.toString() ) }>
                    Delete
                </button>
            </div>
        );
    }
}