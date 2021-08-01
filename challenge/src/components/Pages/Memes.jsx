import React from "react"
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

function Memes() {
	const memes = [
		meme1,
		meme2,
		meme3,
		meme4,
		meme5,
		meme6,
		meme7,
		meme8,
		meme9,
		meme10,
	]
	const getRandomMeme = () => {
		const randomMeme = memes[Math.floor(Math.random() * 10)]
		return randomMeme
	}

	return (
		<div>
			<h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
				<center>Memes!</center>
				<div className="meme-image">
					<center>
						<img
							src={getRandomMeme()}
							alt="Meme"
							style={{
								width: "100%",
								maxWidth: "600px",
								maxHeight: "600px",
								objectFit: "contain",
							}}
						/>
					</center>
				</div>
			</h1>
		</div>
	)
}

export default Memes
