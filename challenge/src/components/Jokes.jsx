import React, { useState } from "react";
import dislikeImg from "./images/dislike.png";
import likeImg from "./images/like.png";
import jokeList from "./jokesData.json";

export default function Jokes() {
    const jokes = jokeList.list;
    const randomJoke = jokes[parseInt(Math.random() * jokes.length)];
    const [textArea, setTextArea] = useState(randomJoke);
    const [count, setCount] = useState(0);

    function increaseClick() {
        setCount(count + 1);
    }

    function decreaseClick() {
        setCount(count - 1);
    }

    function dislikeClick() {
        const randomJoke = jokes[parseInt(Math.random() * jokes.length)];
        decreaseClick();

        setTextArea(randomJoke);
    }

    return (
        <>
            <div
                id="generator"
                style={{
                    textAlign: "center",
                    color: "white",
                    fontSize: 10,
                }}
            >
                <h1
                    value="textArea"
                    style={{ textAlign: "center", color: "white", fontSize: 16 }}
                >
                    <center>{textArea}</center>
                </h1>
            </div>

            <h2 style={{ fontSize: 18, color: "#A9A9A9" }}>
                <center>Haha, did you get it, ha, ha...</center>
            </h2>

            <div id="thumbs">
                <center>
                    <img
                        width="100px"
                        src={likeImg}
                        alt="Like button"
                        onClick={increaseClick}
                    />
                    <img
                        width="100px"
                        src={dislikeImg}
                        alt="Dislike button"
                        onClick={dislikeClick}
                    />
                </center>
                {/* I did inline css cuz too much work to make a css page ;) */}
                <div>
                    <h2 role="jokeCount" style={{ textAlign: 'center' }}>The count is: {count}</h2>
                </div>
            </div>
        </>
    );
}