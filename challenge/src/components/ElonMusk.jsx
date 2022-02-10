import React, { Component } from 'react';
import ElonMuskURI from './images/ElonMusk.png';
import './ElonMuskAnimation.css';

class ElonMusk extends Component {
	imageClick() {
		console.log('runescape');
	}

	render() {
		return (
			<div>
				<img class="zoom"
					src={ElonMuskURI}
          alt="tesla rocket guy"
				/>
			</div>
		);
	}
}

export default ElonMusk;