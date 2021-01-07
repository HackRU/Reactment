import React from 'react'
import GIF from "../Gif"
import Table from '../Table'
import RandomAds from "../RandomAds";
import KrabbyPatty from "../KrabbyPatty";
const FunFacts = (props) => {
   
    return (
        <div>
            <RandomAds />
            <h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
              <center>Fun Facts</center>
            </h1>
                  <Table/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <KrabbyPatty />
                  
        </div>
        
          
        

    )
              }
export default FunFacts
