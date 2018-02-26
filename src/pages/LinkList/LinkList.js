/**
 * Created by IATS on 21.02.2018.
 */
import React from 'react';
import { Route,  Link } from 'react-router-dom';
import Home from '../Home/Home';
import DoneTasks from '../DoneTasks/DoneTasks';
import CurrentTasks from '../CurrentTasks/CurrentTasks';
import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.css';

const LinkList = () => (

    <div className="App__row row grid-x">
        <div className="App__column medium-1">
            <div className="App__menu vertical menu">
                <h2 className='App__menu_icon'><i className="step fi-align-justify size-48"></i></h2>
                <Link to="/">
                    <h2 className='App__menu_icon'><i className="step fi-home size-48" alt="all tasks"></i></h2>

                </Link>
                <Link to="/donetasks">
                    <h2 className='App__menu_icon'><i className="step fi-trophy size-48" alt="active tasks"></i></h2>

                </Link>
                <Link to="/currenttasks">
                    <h2 className='App__menu_icon'><i className="step fi-trash size-48" alt="done tasks"></i></h2>

                </Link>
            </div>
        </div>
        <div className="App__column medium-11">
            <Route exact path="/" component={Home}/>
            <Route path="/donetasks" component={DoneTasks}/>
            <Route path="/currenttasks" component={CurrentTasks}/>
        </div>
    </div>

)

export default LinkList;