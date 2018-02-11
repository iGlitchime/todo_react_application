/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';
//import TasksItem from './TasksItem';

export default class TasksList extends React.Component {

    render() {
        console.log(this.props);
        console.log(this.props.itemsData);
        //console.log(this.props.itemsDelete);
        let MainThis = this;
        let itemsData = this.props.itemsData;
        let itemsDelete = this.props.itemsDelete;


        return (
            <div className="App__tasksList">
                { itemsData ? (itemsData.map(function (listValue, i) {
                    return (
                        <div className="App__tasksItem" key={listValue.toString()}>
                            <div className="App__tasksItemTxt">{listValue}</div>
                            <button className="App__tasksItemBtn" onClick={ itemsDelete.bind(MainThis, listValue.toString() ) }>
                                Delete
                            </button>
                        </div>

                    );
                })) : "Add any task! | Soochee mein ek kaary joden"}
            </div>
        );
    }

}