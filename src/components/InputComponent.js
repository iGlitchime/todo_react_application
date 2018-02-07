import React from 'react';

export class InputComponent extends React.Component{
    render(){

        return (
            <div className="App__child">
                <div className="App__input">
                    <input className="App__input-field" type="text" placeholder="enter smth"/>
                </div>
                <button className="App__input-button">{this.props.buttonName}</button>
            </div>
        );
    }

}