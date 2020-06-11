import React from 'react'
import RandomImage from '../RandomImage'
import Table from '../Table'
import GIF from "../Gif"
import JojoStand from "../JojoStand"

class About extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        standsVisibility: [
          true,true,true,true
        ],
        length: 4
      }
    }
    snap = () => {
      var stands = [...this.state.standsVisibility];
      for(var i = this.state.length/2; i < stands.length; i++){
        stands[i] = false;
      }
      this.setState({
        standsVisibility: stands,
        length: this.state.length/2
      })
    }
    render(){
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
            <div>
            <h1 style={{ fontSize: 100, color: "#FFF5B8" }}>
              <center>About Page</center>
            </h1>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
            <div
              style={{
                backgroundColor: "#00ff00",
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
                  isVisible={this.state.standsVisibility[i]}
                />
              })}                 
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
            <Table/>
              <div style={{marginTop: "1%", marginBottom: "1%", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
              </div>
          </div>
        </div>
    )
  }
}

export default About