import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Wrapper from './Wrapper.js';
import RouteOne from './RouteOne.js';
import RouteTwo from './RouteTwo.js';

const App = React.createClass({
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={Wrapper}>
					<Route path="route-one/:id" component={RouteOne}/>
					<Route path="route-two/:id" component={RouteTwo}/>
				</Route>
			</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
