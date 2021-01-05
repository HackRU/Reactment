function getRandomPhoneNumber() {
	var returnVal = '+1 ';

	var i;
	for (i = 1; i <= 10; i++) {
		if (i === 1) returnVal += '(';
		if (i === 4) returnVal += ')';
		if (i === 4) returnVal += ' ';
		if (i === 7) returnVal += ' ';
		returnVal += Math.floor(Math.random() * 10);
	}
	return returnVal;
}

const RandomPhoneNumber = (props) => {
	return getRandomPhoneNumber();
};

export default RandomPhoneNumber;
