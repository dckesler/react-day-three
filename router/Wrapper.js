import React from 'react';

export default class Wrapper extends React.Component {
	render() {
		return (
			<div>
				Wrapper
				{this.props.children}
			</div>
		)
	}
}
