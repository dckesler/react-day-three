import React from 'react';

export default React.createClass({
	render() {
		return (
			<div>
				<img src={`http://vignette1.wikia.nocookie.net/harrypotter/images/e/e6/Tumblr_n0lq3f9gci1qdd90po8_r1_250.gif/revision/latest?cb=20140403212816`} />
				{this.props.children}
			</div>

		)
	}
})
