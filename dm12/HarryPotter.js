import React from 'react';

export default React.createClass({
	render() {
		return (
			<div>
				<img src={`https://upload.wikimedia.org/wikipedia/en/4/44/HarryPotter5poster.jpg`} />
				{this.props.children}
			</div>
		)
	}
})

