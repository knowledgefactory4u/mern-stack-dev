import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Menu from './components/Menu'
import ListUserComponent from './components/ListUserComponent'
import CreateUserComponent from './components/CreateUserComponent'
import ViewUserComponent from './components/ViewUserComponent'
import UpdateUserComponent from './components/UpdateUserComponent'
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Header />
        <Menu />   
        
                    <Switch> 
                          <Route path = "/" exact component = {ListUserComponent}></Route>
                          <Route path = "/users" component = {ListUserComponent}></Route>
                          <Route path = "/add-user/:_id" component = {CreateUserComponent}></Route>
                          <Route path = "/view-user/:_id" component = {ViewUserComponent}></Route>
                          <Route path = "/update-user/:_id" component = {UpdateUserComponent}></Route> 
                    </Switch>
              
        <Footer />
        </Router>
      </div>
    )
  }
}
