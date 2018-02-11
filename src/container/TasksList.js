/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';
import TasksItem from './TasksItem';

export default class TasksList extends React.Component {

    render() {
        console.log(this.props);
        console.log(this.props.itemsData);
        let MainThis = this.props;


        return (
            <div className="App__tasksList">
                { this.props.itemsData ? (this.props.itemsData.map(function (listValue, i) {

                    <TasksItem listValue={listValue}  itemsProps={MainThis}/>
                    return (
                        <div className="App__tasksItem" key={listValue.toString()}>
                            <div className="App__tasksItemTxt">{listValue}</div>
                            <button className="App__tasksItemBtn" onClick={ MainThis.itemsDelete.bind(MainThis, listValue.toString() ) }>
                                Delete
                            </button>
                        </div>

                    );
                })) : "Add any task! | Soochee mein ek kaary joden"}
            </div>
        );
    }

}