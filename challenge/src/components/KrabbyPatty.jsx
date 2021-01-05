import React, { Component } from 'react';
import KrabbyPattyURI from './images/KrabbyPatty.png';

class KrabbyPatty extends Component {
	imageClick() {
		console.log('Are you feeling it now Mr. Krabs?!?');
	}

	render() {
		return (
			<div>
				<img
					width="200"
					height="166"
					src={KrabbyPattyURI}
          onClick={this.imageClick}
          alt="Tasty Krabby Patty"
				/>
			</div>
		);
	}
}

export default KrabbyPatty;