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
        this.props.test(this.state.inputData);
    };

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleValue} value={this.state.inputValue}  type="text"/>
                    <button type="submit">{this.props.nameButton}</button>
                </form>
            </div>
        );
    }
}