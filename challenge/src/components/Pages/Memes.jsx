import React from "react"

function Memes() {
	const getRandomMeme = () => {
		const randomNum = Math.floor(Math.random() * 10)
		return randomNum
	}

	return (
		<div>
			<h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
				<center>Memes!</center>
				<div className="meme-image">
					<center>
						<img
							src={`https://raw.githubusercontent.com/rzmk/reactment-memes/master/${getRandomMeme()}.png`}
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
