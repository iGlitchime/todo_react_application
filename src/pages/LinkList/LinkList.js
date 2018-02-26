/**
 * Created by IATS on 21.02.2018.
 */
import React from 'react';
import { Route,  Link } from 'react-router-dom';

import Home from '../Home/Home';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';

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
                <Link to="/about">
                    <h2 className='App__menu_icon'><i className="step fi-trophy size-48" alt="active tasks"></i></h2>

                </Link>
                <Link to="/contacts">
                    <h2 className='App__menu_icon'><i className="step fi-trash size-48" alt="done tasks"></i></h2>

                </Link>
            </div>
        </div>
        <div className="App__column medium-11">
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contacts" component={Contacts}/>
        </div>
    </div>

)

export default LinkList;