/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';
import TasksItem from './TasksItem';
import PropTypes from 'prop-types';

export default class TasksList extends React.Component {
    static propTypes = {
        itemsData: PropTypes.array.isRequired
    };
    render() {
        return (
            <div className="App__tasksList">
                { this.props.itemsData ? (this.props.itemsData.map((listValue, index) => {
                    return (
                        <TasksItem
                            key={index}
                            listValue={listValue}
                            itemsDelete={this.props.itemsDelete}
                        />
                    );
                })) : "Add any task! | Soochee mein ek kaary joden"}
            </div>
        );
    }
}