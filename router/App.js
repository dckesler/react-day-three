import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
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
