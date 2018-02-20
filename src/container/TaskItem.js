/* Created by iGlitchime on 10.02.2018. */

import React from 'react';
import PropTypes from 'prop-types';

export default class TaskItem extends React.Component {
    static propTypes = {
        listValue: PropTypes.string.isRequired
    };

    render() {
        let listValue = this.props.listValue;
        return (
            <div className="App__tasksItem">
                <div className="App__tasksItemTxt">{listValue}</div>
                <button className="App__tasksItemBtn">
                    Delete
                </button>
            </div>
        );
    }
}