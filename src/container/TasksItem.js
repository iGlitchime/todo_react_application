///**
// * Created by IATS on 10.02.2018.
// */
//import React from 'react';
//
//export default class TasksItem extends React.Component {
//    constructor(props){
//        super(props);
//    }
//
//
//
//    render() {
//        //console.log(this.props);
//        return (
//            <div>
//                { this.props.getInputData ? (this.props.getInputData.map(function (listValue, i) {
//                    return(
//                    <div className="App__tasksItem" key={listValue.toString()}>
//                        <div className="App__tasksItemTxt">{listValue}</div>
//                        <button className="App__tasksItemBtn" onClick={ this.props.handleDel.bind(this, listValue.toString()) } >Delete</button>
//                    </div>);
//                })) : "Add any task! | Soochee mein ek kaary joden"}
//            </div>
//        );
//    }
//}

//<button className="App__tasksItemBtn" onClick={ this.props.handleDelete.bind(this, listValue.toString()) } >Delete</button>