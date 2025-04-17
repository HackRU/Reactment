import React from "react";
import BabyYoda from "../../mandalorian/BabyYoda";
import NumberLogger from "../../NumberLogger";
import strings from "../../strings.json";
import Fade from "react-reveal/Fade";
import MonthAndYear from "../MonthAndYear";
import Counter from "../Counter";
import PartyParrot from "../PartyParrot";
import RandomAds from "../RandomAds";
import Button from "@material-ui/core/Button";
import Mando from "../Mando";
import Contractions from "../Contractions";
import ElonMusk from "../ElonMusk";
import Kanye from "../Kanye";
import GetName from "../GetName";
import RandomColorButton from "../RandomColorButton";
import MoviePage from "../MoviePage";
import Pokesearch from "../Pokesearch";
import Announcements from "../Announcements";
import News from "../News";

const Home = (props) => {
  return (
    <div>
      <div>
        <div
          style={{
            width: "100%",
            marginTop: "8rem",
            textAlign: "center",
            position: "relative",
            zIndex: "1",
          }}
        >
          <Pokesearch />
          <Kanye />

          <Fade left cascade>
            <span style={{ fontWeight: "bold" }}>{strings.title}</span>
            {strings.greeting}

            <Button
              style={{ margin: "20px", color: "white" }}
              href="https://github.com/HackRU"
              color="primary"
              variant="contained"
            >
              {" "}
              Go to HackRu's GitHub{" "}
            </Button>
            <Button
              style={{ margin: "20px", color: "grey" }}
              color="secondary"
              variant="contained"
            >
              {" "}
              Help Button{" "}
            </Button>
            <RandomColorButton />
            <NumberLogger />
          </Fade>
          <div>
            <Counter />
          </div>
        </div>
        <GetName />
        <RandomAds />
        <MonthAndYear />
        <Contractions />
        <MoviePage />
        <BabyYoda />
        <Mando />
        <PartyParrot />
        <ElonMusk />
        <Announcements />
        <News />
      </div>
    </div>
  );
};

export default Home;
