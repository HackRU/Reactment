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
	return (
		<div>
			<div>
				<h1 style={{ fontSize: 100, color: "#FFC436" }}>
					<center>Memes</center>
				</h1>
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
