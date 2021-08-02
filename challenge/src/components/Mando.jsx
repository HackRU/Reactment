import MandoURI from './images/mando.jpg';
import React, { Component } from 'react';

class Mando extends Component {
	render() {
		return (
			<div>
				<img
					width="362"
					height="653"
					src={MandoURI}
                    alt="mando"
				/>
			</div>
		);
	}
}

export default Mando;