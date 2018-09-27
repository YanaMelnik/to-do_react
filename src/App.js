import React, { Component } from 'react';
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Edit from './edit';
import Task from './task';
import Archive from './archive';
import { Button } from "react-bootstrap";
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <nav className="navigation justify-content-between">
                        <Button
                            className='col-md-3 m-3'
                            bsStyle='info'
                            bsSize='large'>
                            <NavLink to="/" className="navigation-link text-light" activeClassName="active">
                                Home
                            </NavLink>
                        </Button>
                        <Button
                            className='col-md-3 m-3'
                            bsStyle='info'
                            bsSize='large'>
                            <NavLink to="/archive" className="navigation-link text-light" activeClassName="active">
                                Archive
                            </NavLink>
                        </Button>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Task} />
                        <Route path="/edit/:taskID" component={Edit} />
                        <Route path="/archive" component={Archive} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
