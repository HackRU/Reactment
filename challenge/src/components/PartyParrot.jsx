import React, { Component } from 'react';
import PartyParrotImg from './images/Party_Parrot.gif';

class PartyParrot extends Component {

	render() {
		return (
			<div>
				<img
					width="200"
					height="200"
					src={PartyParrotImg}
                    alt="pArTy PaRrOt"/>
                    <img
					width="200"
					height="200"
					src={PartyParrotImg}
                    alt="oThEr pArTy PaRrOt"/>
                    <img
					width="200"
					height="200"
					src={PartyParrotImg}
                    alt="pArTy PaRrOt"/>
			</div>
            
		);
	}
}

export default PartyParrot;