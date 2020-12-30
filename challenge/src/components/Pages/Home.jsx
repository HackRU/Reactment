import React from 'react';
import BabyYoda from '../../mandalorian/BabyYoda';
import NumberLogger from '../../NumberLogger';
import strings from '../../strings.json';
import Fade from 'react-reveal/Fade';
import MonthAndYear from '../MonthAndYear';
import Counter from '../Counter';
import KrabbyPatty from '../KrabbyPatty';
import RandomAds from '../RandomAds';

const Home = (props) => {
	return (
		<div>
			<div>
				<div
					style={{ width: '100%', marginTop: '4rem', textAlign: 'center' }}
				>
					<Fade left cascade>
						{strings.greeting}

						<form action="https://github.com/HackRU">
							<input type="submit" value="Go to HackRU's GitHub!" />
						</form>

						<button type="button"> Help Button </button>
						<NumberLogger />
					</Fade>
					<div>
						<Counter />
					</div>
				</div>
				<RandomAds />
				<MonthAndYear />
				<BabyYoda />
				<KrabbyPatty />
			</div>
		</div>
	);
};

export default Home;
