// 路由配置
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './home/Home.js'

export default class ROUTER extends Component{
  render() {
    return(
      <Router>
        <Route exact path="/" component={Home}></Route>
      </Router>
    )
  }
}