import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';

// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var IndexRoute = require('react-router').IndexRoute;

import RouteOne from './RouteOne.js';
import RouteTwo from './RouteTwo.js';
var App = React.createClass({
	render() {
		return (
			<Router>
				<Route path="/route-one/:id" component={RouteOne}/>
				<Route path="/route-two/:id" component={RouteTwo}/>
			</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
