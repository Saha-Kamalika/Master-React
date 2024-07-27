import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
export default class App extends Component {
  render() {
    return (
      <Router>
      <div>
        <NavBar/>
        
        <Switch>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
          <Route path="/health">
            <News pageSize={5} country="in" category="health"/>
          </Route>
        </Switch> 
      </div>
      </Router>
    )
  }
}
