function getRandomEmail() {
	return Math.random().toString(36).substring(2, 11) + '@itshacked.com';
}

const RandomEmail = (props) => {
	return getRandomEmail();
};

export default RandomEmail;
