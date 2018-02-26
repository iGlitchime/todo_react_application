import React, { Component } from 'react';
import LinkList from './pages/LinkList/LinkList';
import 'foundation-sites';
import 'foundation-sites/dist/css/foundation.css';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import './App.css';

const history = createBrowserHistory();

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App__header"><h1>ToDoList</h1></header>
                <Router history={history}>
                    <LinkList/>
                </Router>
            </div>
        );
    }
}