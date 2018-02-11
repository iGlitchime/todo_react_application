/* Created by IATS on 10.02.2018. */
import React from 'react';

export default class TasksItem extends React.Component {
    render() {
        console.log(this.props.itemsProps);
        console.log(this.props.listValue);
        return (
            <div className="App__tasksItem" key={this.props.listValue.toString()}>
                <div className="App__tasksItemTxt">{this.props.listValue}</div>
                <button className="App__tasksItemBtn" onClick={ this.props.itemsProps.itemsDelete.bind(this, this.props.listValue.toString()) }>
                    Delete
                </button>
            </div>
        );
    }
}