/**
 * Created by IATS on 09.02.2018.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default class InputContainer extends React.Component{

    constructor() {
        super();

        this.state = {
            inputValue: ''
        };
    }
    handleValue = (event)=>{
        this.setState({ inputValue: event.target.value });
    };

    sendValueOnSubmit= (event) =>{
        event.preventDefault();
        this.props.onSubmit(this.state.inputValue);
        this.setState({inputValue : ''});
    };

    render(){
        return (
            <div className="App__child">
                <form className="App__input" onSubmit={this.sendValueOnSubmit} ref="form">
                    <input className="App__input-field" onChange={this.handleValue} value={this.state.inputValue} type="text" ref="inputTaskItemField"/>
                    <button className="App__input-button" type="submit">Add Task</button>
                </form>
            </div>
        );
    }
}