import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "./actions";

import Dashboard from './Components/Dashboard';
import Header from './Components/Header';
import Landing from './Components/Landing';

class App extends Component {

  componentDidMount() {
    console.log("2");
    this.props.fetchUser();
  }

  render() {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </div>
            </BrowserRouter>
        </div>
    );
}
}

export default connect(null, actions)(App);
