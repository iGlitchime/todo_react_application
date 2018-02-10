/**
 * Created by IATS on 10.02.2018.
 */
import React from 'react';

export default class TasksItem extends React.Component{


    render(){
        console.log(this.props);
        return(
            <div>
                <label>{this.props.test ? this.props.test : 'Add any task!'}</label>
            </div>

        );
    }
}