/* Created by iGlitchime on 10.02.2018. */
import React from 'react';
import PropTypes from 'prop-types';
//import Toggle from 'react-toggle';


export default class TaskItem extends React.Component {
    static propTypes = {
        listValueItem: PropTypes.object.isRequired,
        onDeleteItem: PropTypes.func.isRequired
    };

    constructor() {
        super();

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDeleteItem(event) {
        event.preventDefault();
        alert('Yo');
        //this.props.onDeleteItem(this.props.listValueItem);
    }

;


    render() {
        return (
        <div className="App__tasksItem row grid-x grid-padding-x" id={this.props.listValueItem.id}>
            <div className="App__checkbox columns medium-8 text-left row">

                <input id="checkbox12" className="App__checkbox column" type="checkbox" toggle={this.handleDeleteItem}/>
                <label htmlFor="checkbox12" className="App__tasksItemTxt columns middle-11">
                    {this.props.listValueItem.item}
                </label>
            </div>
            <div className="App__tasksItemDate columns medium-4 text-right">
                {Date.now()}
            </div>
        </div>
        );
    }
}