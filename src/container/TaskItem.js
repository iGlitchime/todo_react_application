/* Created by iGlitchime on 10.02.2018. */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

export default class TaskItem extends React.Component {
    static propTypes = {
        listValueItem: PropTypes.object.isRequired,
        onDeleteItem: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);

        this.state = {
            listValueItem: this.props.listValueItem,
            checked: false
        };
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }


    handleDeleteItem(event) {

        if (event.target.checked !== false) {
            let itemInfo = {
                id: this.props.listValueItem.id,
                timeStamp: Date.now(),
                item: this.props.listValueItem.item,
                completed: (event.target.checked)
            };
            this.setState({listValueItem: itemInfo})
        } else {
            let itemInfo = {
                id: this.props.listValueItem.id,
                timeStamp: Date.now(),
                item: this.props.listValueItem.item,
                completed: (event.target.checked)
            };
            this.setState({listValueItem: itemInfo});
        }
    }


    render() {
        return (
            <div className="App__tasksItem row grid-x align-justify align-middle" id={this.props.listValueItem.id}>
                <div className="App__checkbox cell small-8 medium-8 large-8 text-left align-middle">
                        <input id={this.props.listValueItem.id}
                               className="App__checkbox column"
                               type="checkbox"
                               onChange={this.handleDeleteItem}
                            />
                        <label htmlFor={this.props.listValueItem.id}
                               id={this.props.listValueItem.id}
                               ref=""
                               className={this.state.listValueItem.completed ? 'App__tasksItemTxt columns done' : 'App__tasksItemTxt columns'}>
                            {this.props.listValueItem.item}
                        </label>
                </div>
                <div className="App__tasksItemDate cell small-4 medium-4 large-4 text-right">
                    <Moment format="YYYY-MM-DD HH:mm">
                        {this.state.listValueItem.timeStamp}
                    </Moment>
                </div>
            </div>
        );
    }
}