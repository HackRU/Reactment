import React, { Component } from 'react';
import DoraURI from './images/dora.jpg';

class Dora extends Component {
	constructor(props) {
        super(props);
        this.state = {
            leftPositionState: 200,
			topPositionState: 200
        };
    }
	imageClick=()=>{
		this.setState({leftPositionState: Math.random()*(window.innerWidth-400), topPositionState: Math.random()*500})
	}

	render() {
		return (
			<div style={{position:'relative'}}>
				<img
					width="400"
					height="400"
					style={{
						left:this.state.leftPositionState,
						top:this.state.topPositionState,
						position:'absolute'
						
					}}
					src={DoraURI}
					onClick={this.imageClick}
                    alt="Dora waving"
				/>
			</div>
		);
	}
}

export default Dora;