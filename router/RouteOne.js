import React from 'react';
import { Link } from 'react-router';

var RouteOne = React.createClass({
	render() {
		return (
			<div>
				<h1>{this.props.params.id}</h1>	
				<Link to="/route-two/somesortofid">
					<h2>Switch Route</h2>
				</Link>
			</div>
		)	
	}
});

export default RouteOne;
