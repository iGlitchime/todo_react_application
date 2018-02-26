/** Created by iGlitchime on 07.02.2018.*/
import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import { removeItemTodoAction } from '../actions/index';

export class TaskList extends React.Component {
    constructor(state) {
        super();

        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }
    handleDeleteItem(item) {
        this.props.removeItemTodoAction(item);
    };
    render() {
        let listValue = this.props.todos;
        return (
            <div className="App__taskList">
                { listValue ? ( listValue.map((listValueItem, i) => {
                    return (
                        <TaskItem
                            key={listValueItem.id}
                            listValueItem={listValueItem}
                            onDeleteItem={this.handleDeleteItem}
                            />
                    );
                })) : "Add any task!"}
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        todos: state.todos
    }
}
function mapDispatchToProps(dispatch) {
    return {
        removeItemTodoAction: (item) => dispatch(removeItemTodoAction(item))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);