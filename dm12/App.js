import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route } from 'react-router';
import DevilsSnare from './DevilsSnare.js';
import Leviosa from './Leviosa.js';
import HarryPotter from './HarryPotter.js';
import Ron from './Ron.js';
import Page404 from './Page404.js';

var App = React.createClass({
	render() {
		return (
			<Router>
				<Route path="devilssnare" component={DevilsSnare}>
					<Route path="harrypotter" component={HarryPotter}>
						<Route path="ron" component={Ron} />
					</Route>
				</Route>
				<Route path="leviosa" component={Leviosa} />
				<Route path="*" component={Page404} />
			</Router>
		)
	}
});

ReactDOM.render(<App />, document.getElementById("app"));
