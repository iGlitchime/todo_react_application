/**
 * Created by IATS on 07.02.2018.
 */
import React from 'react';
import { TasksItem } from './TasksItem';

export class TasksList extends React.Component{
    render(){
        console.log(this.props);
        return (
            <div className="App__tasksList">
                <TasksItem content={this.props}></TasksItem>
            </div>
        );
    }

}