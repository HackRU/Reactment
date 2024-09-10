import React from "react";
import MemeImage from "../MemeImage";
import meme1 from "../Memes/1.png"
import meme2 from "../Memes/2.png"
import meme3 from "../Memes/3.png"
import meme4 from "../Memes/4.png"
import meme5 from "../Memes/5.png"
import meme6 from "../Memes/6.png"
import meme7 from "../Memes/7.png"
import meme8 from "../Memes/8.png"
import meme9 from "../Memes/9.png"
import meme10 from "../Memes/10.png"
import "../memesStyles.css";

const Memes = (props) => {
	const page = props.currentpage;

	// list of funny video links. reload the page for a new random video
	const links = [
		'https://www.youtube.com/embed/fWNVLO8HRf0?si=hE6LfGidtKP9IVW6',
		'https://www.youtube.com/embed/tYX6mVp0jmw?si=yXRCKboFPaJh8BOV',
		'https://www.youtube.com/embed/2dcyby6vH9s?si=WEOatLtjLIVlvnox',
		'https://www.youtube.com/embed/4MPPeSaGTDc?si=kJ6b6Ulrwwn6c4bm',
		'https://www.youtube.com/embed/w6vVS6v58II?si=oUPr96VQCx0oc4S_',
		'https://www.youtube.com/embed/bVIMEBU_jgI?si=INkGBNgHt3Vbk9Vs'
	];
	const randomLink = links[Math.floor(Math.random() * links.length)];

	return (
		<div>
			<div>
				<h1 style={{ fontSize: 100, color: "#FFC436" }}>
					<center>Memes</center>
				</h1>
				<div class="video">
					<iframe 
						width="560" 
						height="315" 
						src={`${randomLink}`}
						title="Sana's Embedded Video" 
						frameborder="0" 
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
						referrerpolicy="strict-origin-when-cross-origin" 
						allowfullscreen="true"
					>
					</iframe>
				</div>
				<div class="grid-container">
					<div class="meme">
						<MemeImage
							description="Teletubbies!"
							weblink={meme1}
							page={meme1}
							height="100%"
							width="100%"
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Kirby!"
							weblink={meme2}
							page={meme2}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Bear!"
							weblink={meme3}
							page={meme3}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Minecraft!"
							weblink={meme4}
							page={meme4}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Spongebob1!"
							weblink={meme5}
							page={meme5}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Spongebob2!"
							weblink={meme6}
							page={meme6}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Spongebob3!"
							weblink={meme7}
							page={meme7}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Spongebob4!"
							weblink={meme8}
							page={meme8}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Winnie the Pooh!"
							weblink={meme9}
							page={meme9}
						></MemeImage>
					</div>
					<div class="meme">
						<MemeImage
							description="Pikachu!"
							weblink={meme10}
							page={meme10}
						></MemeImage>
					</div>
				</div>
			</div>
		</div>
	)
};
export default Memes;
