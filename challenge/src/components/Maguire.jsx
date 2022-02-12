import React, { Component } from 'react';
import MaguireURI from './images/Maguire.png';

class Maguire extends Component {

	render() {
		return (
			<div>
				<img
					width="500"
					height="250"
					src={MaguireURI}
                    alt="Maguire dancing"
				/>
			</div>
		);
	}
}

export default Maguire;