import React, { useRef, useState } from 'react'
import JojoStand from '../JojoStand'
import RandomAds from "../RandomAds";
import Button from '@material-ui/core/Button';

export default function About() {

    const [standsVisibility, setStandsVisibility] = useState([true, true, true, true]);
    const [length, setLength] = useState(4);
    const smartQuoteHasRun = useRef(false);
    const [text, setText] = useState(smartQuote());

    function snap() {
        var stands = [...standsVisibility];

        if (length > 1) {
            for (var i = 0; i < length / 2; i++) {

                //Randomly select which is disintegrated 
                var RandomNum = Math.floor(Math.random() * 4);
                //console.log("disappear: ", RandomNum);

                if (length <= 1) {
                    break;
                }
                else if (stands[RandomNum] === true) {
                    stands[RandomNum] = false;

                    // If Star Platinum disintegrated then display Unbalanced! on the console
                    if (RandomNum === 3) {
                        console.log("Unbalanced!");
                    }
                }
                else {
                    i--;
                }
            }
        } else {

            //Displays error message when attempting to thanos snap when only one stand remains
            window.alert("Thanos’ fingers are sore!");

        }

        setStandsVisibility(stands);
        setLength(length / 2);
    }

    function smartQuote() {
        if (smartQuoteHasRun.current) return;
        fetch("https://techy-api.vercel.app/api/json")
            .then((response) => response.json())
            .then((data) => setText(data.message));
        smartQuoteHasRun.current = true;
    }

    var stands = [
        {
            stand: "The World",
            url: "https://static.jojowiki.com/images/c/cb/TheWorldMangaAv.png"
        },
        {
            stand: "Hermit Purple",
            url: "https://static.jojowiki.com/images/0/08/HermitPurpleMangaAv.png"
        },
        {
            stand: "Magician's Red",
            url: "https://static.jojowiki.com/images/7/7c/MagicianRedMangaAv.png"
        },
        {
            stand: "Star Platinum",
            url: "https://cdn.discordapp.com/attachments/701574644595032104/710625607503052800/StarPlatinumMangaAv.png"
        }
    ];

    return (
        <div>

            <RandomAds />
            <div>
                <h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
                    <center>About Page</center>
                </h1>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <br />
                    <p>HackRU is a 24-hour hackathon at Rutgers University, hosted every semester. Come join us for a weekend filled with learning and creating.
                    </p>
                    <br />
                </div>
                <div
                    style={{
                        backgroundColor: "green",
                        display: "flex",
                        height: "100%",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        flexWrap: "wrap",
                    }}
                >
                    {stands.map((stand, i) => {
                        return <JojoStand
                            stand={stand.stand}
                            url={stand.url}
                            key={stand.stand}
                            isVisible={standsVisibility[i]}
                        />
                    })}
                </div>
                <div style={{ backgroundColor: "whitesmoke" }}>
                    <br />
                </div>
                <center>
                    <Button color="secondary" variant="outlined" style={{ margin: "20px", padding: "10px" }} onClick={snap}>
                        Thanos Snap
                    </Button>
                    <p>{text}</p>
                </center>
            </div>
        </div >
    )

}