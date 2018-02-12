/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';
import TasksItem from './TasksItem';

export default class TasksList extends React.Component {

    render() {
        //console.log(this.props);
        //console.log(this.props.itemsData);
        //console.log(this.props.itemsDelete);
        let MainThis = this;
        console.log(MainThis);
        //let MainThis = this.props;


        return (
            <div className="App__tasksList">
                { this.props.itemsData ? (this.props.itemsData.map(function (listValue, i) {
                    return (
                        <TasksItem
                            key={listValue.toString()}
                            listValue={listValue}
                            TasksListThis={MainThis}
                        />
                    );
                })) : "Add any task! | Soochee mein ek kaary joden"}
            </div>
        );
    }
}