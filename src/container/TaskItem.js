/* Created by iGlitchime on 10.02.2018. */
import React from 'react';
import PropTypes from 'prop-types';


export default class TaskItem extends React.Component {
    static propTypes = {
        listValueItem: PropTypes.object.isRequired,
        onDeleteItem: PropTypes.func.isRequired
    };

    constructor(){
        super();

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDeleteItem(event){
        event.preventDefault();
        this.props.onDeleteItem(this.props.listValueItem);
    };


    render() {
        return (
            <div className="App__tasksItem" id={this.props.listValueItem.id}>
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