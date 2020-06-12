import React from 'react'
import GIF from "../Gif"
import Table from '../Table'
const FunFacts = (props) => {
   
    return (
        <div>
            
            <h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
              <center>Fun Facts</center>
            </h1>
                  <Table/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
               
                }  
        </div>

    )
              }
export default FunFacts
