/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';

export class TasksItem extends React.Component{
    render(){
        console.log(this.props.content.buttonName);
        console.log(this.props.content.taskItem);
        //console.log(this.props.content.children);
        return(
            <div className="App__tasksItem">
                <div className="App__tasksItemTxt">{this.props.content.taskItem}</div>
                <button className="App__tasksItemBtn">{this.props.content.buttonName}</button>
            </div>
        );
    }
}