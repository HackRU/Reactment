import React, { Component } from 'react';
import MaguireURI from './images/Dora.jpg';

class Dora extends Component {

	render() {
		return (
			<div>
				<img
					width="250"
					height="150"
					src={DoraURI}
                    alt="Dora dancing"
				/>
			</div>
		);
	}
}

export default Dora;