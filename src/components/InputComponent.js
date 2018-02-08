import React from 'react';

export class InputComponent extends React.Component {

    addItem(props) {
        console.log(props);
    }

    render() {

        return (
            <div className="App__child">
                <div className="App__input">
                    <input className="App__input-field" type="text" placeholder="enter smth"/>
                </div>
                <button className="App__input-button" onClick={this.addItem}> -- {this.props.addButton}</button>
            </div>
        );
    }

}