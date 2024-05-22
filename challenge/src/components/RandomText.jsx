
const randomText = [
    "LEAVE ME ALONE DON't CALL THIS NUMBER!!",
    "THE ONE PIECE IS REAL",
    "SWAG",
    "THIS ONE PIECE IS NOT REAL!!!",
    "NOT GHOST BUSTERS!!",
  ];

function getRandomText() {
      const randomIndex = Math.floor(Math.random() * randomText.length);
      return randomText[randomIndex];
}

const RandomText = (props) => {
	return getRandomText();
};

export default RandomText;
