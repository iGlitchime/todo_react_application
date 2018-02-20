/**
 * Created by IATS on 09.02.2018.
 */

import React from 'react';
import { connect } from 'react-redux';
import { store } from '../store';
import PropTypes from 'prop-types';

import { addItemTodoAction } from '../actions/index';

class InputContainer extends React.Component {

    constructor() {
        super();

        this.sendValueOnSubmit = this.sendValueOnSubmit.bind(this);
        this.handleInoutChange = this.handleInoutChange.bind(this);

        this.state = {
            inputValue: ''
        };
    }

    handleInoutChange = (event)=> {
        this.setState({inputValue: this.refs.inputTaskItemField.value});
    };

    sendValueOnSubmit = (event) => {
        event.preventDefault();
        if (this.state.inputValue && this.state.inputValue.length > 0) {
            this.props.addItemTodoAction({id: Date.now(), item: this.state.inputValue});
        }
        this.setState({inputValue: ''});
    };

    render() {
        return (
            <div className="App__child">
                <form className="App__input" onSubmit={this.sendValueOnSubmit} ref="form">
                    <input className="App__input-field" onChange={this.handleInoutChange} value={this.state.inputValue}
                           type="text" ref="inputTaskItemField"/>
                    <button className="App__input-button" type="submit">Add Task</button>
                </form>
            </div>
        );
    }
}


function mapDispatchToProps(dispatch) {
    return {
        addItemTodoAction: (item)=>dispatch(addItemTodoAction(item))
    }
}

export default connect(null, mapDispatchToProps)(InputContainer);