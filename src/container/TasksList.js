/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';
//import TasksItem from './TasksItem';

export default class TasksList extends React.Component {

    render() {
        console.log(this.props);
        console.log(this.props.itemsData);
        //console.log(this.props.handleDelete('kek'));
        return (
                <div  className="App__tasksList" >
                    { this.props.itemsData ? (this.props.itemsData.map(function (listValue, i) {
                        return(
                            <div className="App__tasksItem" key={listValue.toString()}>
                                <div className="App__tasksItemTxt">{listValue}</div>
                                <button className="App__tasksItemBtn" onClick={ this.props.handleDelete(this, listValue.toString) } >Delete</button>
                            </div>

                        );
                    })) : "Add any task! | Soochee mein ek kaary joden"}
                </div>
        );
    }

}