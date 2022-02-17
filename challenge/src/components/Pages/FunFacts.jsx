import React from 'react'
import GIF from "../Gif"
import Table from '../Table'
import RandomAds from "../RandomAds"
import Jokes from '../Jokes';
import KrabbyPatty from "../KrabbyPatty";
import Maguire from '../Maguire';
import CovidCount from '../CovidCount';

const FunFacts = (props) => {
   
    return (
      
        <div>
          
            <RandomAds />
            <h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
              <center>Fun Facts</center>
            </h1>
                  <CovidCount/>
                  <Jokes />
                  <KrabbyPatty />
                  <Table />
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
              
              <div>
                <center><Maguire /></center>
                <center style={{color: "white"}}>Fun fact: He's gonna put some dirt in your eye...</center>
              </div> 
               
                
        </div>

    )
              }
export default FunFacts
