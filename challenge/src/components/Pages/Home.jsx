import React from 'react';
import BabyYoda from '../../mandalorian/BabyYoda';
import NumberLogger from '../../NumberLogger';
import strings from '../../strings.json';
import Fade from 'react-reveal/Fade';
import MonthAndYear from '../MonthAndYear';
import Counter from "../Counter";
import KrabbyPatty from "../KrabbyPatty";
import PartyParrot from "../PartyParrot"
import RandomAds from "../RandomAds";
import Button from '@material-ui/core/Button';
import Mando from "../Mando";
import Kanye from "../Kanye"

const Home = (props) => {
    return (
        <div>
            <div>
            <div
              style={{ width: "100%", marginTop: "8rem", textAlign: "center", position: "relative", zIndex: '1' }}
            >
               <Kanye/>
              <Fade left cascade>
                {strings.greeting}

                <Button style={{ margin: "20px", color: "white" }} href="https://github.com/HackRU" color="primary" variant="contained"> Go to HackRu's GitHub </Button>
                <Button style={{ margin: "20px", color: "grey" }} color="secondary" variant="contained"> Help Button </Button>
                <NumberLogger />
              </Fade>
              <div>
                <Counter />
              </div>
                </div>
                <RandomAds />
                <MonthAndYear />
                <BabyYoda />
                <Mando />
                <PartyParrot/>
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
                <KrabbyPatty />
            </div>


        </div>

    )
}

export default Home
