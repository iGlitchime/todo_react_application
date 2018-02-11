/**
 * Created by IATS on 09.02.2018.
 */
import React from 'react';

export default class InputContainer extends React.Component{

    constructor() {
        super();

        this.state = {
            inputData: [],
            inputValue: ''
        };
    }
    handleValue = (event)=>{
        this.setState({ inputValue: event.target.value });
    };
    handleSubmit = (event) => {
        event.preventDefault();
        let { inputData, inputValue } = this.state;
        if(inputValue.length > 0){
            this.setState({ inputData: [...inputData, inputValue ] },
                ()=>{this.dispatchData()}
            );

        }else{
            console.log("Namah Shivaya");
        }
    };
    dispatchData = ()=>{
        this.props.getInputData(this.state.inputData);
    };

    render(){
        return (
            <div className="App__child">
                <form className="App__input" onSubmit={this.handleSubmit} ref="form">
                    <input className="App__input-field" onChange={this.handleValue} value={this.state.inputValue} type="text" ref="inputTaskItemField"/>
                    <button className="App__input-button" type="submit">{this.props.nameButton}</button>
                </form>
            </div>
        );
    }
}