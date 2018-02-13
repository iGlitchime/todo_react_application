/**
 * Created by iGlitchime on 07.02.2018.
 */
import React from 'react';
import TasksItem from './TasksItem';
import PropTypes from 'prop-types';

export default class TasksList extends React.Component {
    static propTypes = {
        tasksList: PropTypes.array.isRequired,
        onItemRemove: PropTypes.func.isRequired
    };
    render() {
        return (
            <div className="App__tasksList">
                { this.props.tasksList ? (this.props.tasksList.map((listValue, index) => {
                    return (
                        <TasksItem
                            key={index}
                            listValue={listValue}
                            onItemRemove={this.props.onItemRemove}
                        />
                    );
                })) : "Add any task! | Soochee mein ek kaary joden"}
            </div>
        );
    }
}