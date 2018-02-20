/** Created by iGlitchime on 07.02.2018.*/
import React from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';


export class TaskList extends React.Component {
    render() {
        let listValue = this.props.todos;
        return (
            <div className="App__taskList">
                { listValue ? ( listValue.map((listValueItem, i) => {
                    return (
                        <TaskItem
                            key={listValueItem.id}
                            listValueItem={listValueItem}
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
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskList);