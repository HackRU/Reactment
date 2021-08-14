import React, { Component } from 'react';

class GIF extends Component {
	state = {};
	render() {
		return (
			<img
				style={{ margin: '0 1% 0 1%' }}
                src={'https://media.giphy.com/media/g9582DNuQppxC/giphy.gif'}
                alt="Skeleton face playing trumpet"
			></img> 
		);
	}
}
export default GIF;
