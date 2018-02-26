/* Created by iGlitchime on 10.02.2018. */
import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';


export default class TaskItem extends React.Component {
    static propTypes = {
        listValueItem: PropTypes.object.isRequired,
        onDeleteItem: PropTypes.func.isRequired
    };

    constructor() {
        super();
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleDeleteItem(event) {
        //event.preventDefault();

        console.log('Checkbox checked:', (event.target.checked));
        if (event.target.checked && event.target.checked !== false) {
            document.getElementById('labelid_' + this.props.listValueItem.id).style.textDecoration = 'line-through';
        } else {
            document.getElementById('labelid_' + this.props.listValueItem.id).style.textDecoration = 'none';
        }

        //записываю новый Date.now() в качестве id
        this.props.onDeleteItem(this.props.listValueItem);
    }

;


    render() {
        return (
            <div className="App__tasksItem row grid-x grid-padding-x" id={this.props.listValueItem.id}>
                <div className="App__checkbox columns medium-8 text-left row">
                    <input id={'inputid_'+ this.props.listValueItem.id} className="App__checkbox column" type="checkbox"
                           onClick={this.handleDeleteItem}/>
                    <label htmlFor={'inputid_'+ this.props.listValueItem.id}
                           id={'labelid_'+ this.props.listValueItem.id} className="App__tasksItemTxt columns middle-11">
                        {this.props.listValueItem.item}
                    </label>
                </div>
                <div className="App__tasksItemDate columns medium-4 text-right">
                    <Moment format="YYYY-MM-DD HH:mm">
                        {this.props.listValueItem.id}
                    </Moment>
                </div>
            </div>
        );
    }
}