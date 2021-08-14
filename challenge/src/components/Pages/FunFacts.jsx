import React from 'react'
import GIF from "../Gif"


const FunFacts = (props) => {
   
    return (
        <div>
            <h1 style={{ fontSize: 110, color: "#000000" }}>
              <center>Fun Facts!!</center>
            </h1>
                  <GIF gifsrc="https://media.giphy.com/media/g9582DNuQppxC/giphy.gif"/>
                  <p>Hey, I got a fun fact for you! Did you know that Leonardo DiCaprio was nominated for 5 Academy Awards but didn't actually win one until very recently? </p>
                  <p>In 2016, he won Best Actor for his role in the movie Revenant. Pretty cool/scary movie!</p>
        </div>

    )
              }
export default FunFacts
