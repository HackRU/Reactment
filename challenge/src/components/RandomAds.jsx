import React, { Component } from 'react';
import ad1 from './Ads/images/Ads(1).jpg';
import ad2 from './Ads/images/Ads(2).jpg';
import ad3 from './Ads/images/Ads(3).jpg';
import ad4 from './Ads/images/Ads(4).jpg';
import ad5 from './Ads/images/Ads(5).jpg';

class RandomAds extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [ad1, ad2, ad3, ad4, ad5],
			selectedImage: ad4,
		};
	}

	componentDidMount() {
		setInterval(() => {
			this.setState((prevState) => {
				var ran = Math.floor(Math.random() * this.state.images.length);
				return { selectedImage: this.state.images[ran] };
			});
		}, 2000);
	}

	render() {
		return (
			<div>
				<img
					src={this.state.selectedImage}
					style={{
						height: '50%',
						weight: '15%',
						position: 'absolute',
						top: '25%',
						right: '0%',
                    }}
                    alt="Random Ads"
				/>
			</div>
		);
	}
}

export default RandomAds;
