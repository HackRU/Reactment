<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import JojoStand from '../JojoStand'
=======
=======
>>>>>>> origin/shambhavir
//import React from 'react'
import RandomImage from '../RandomImage'
import React, { Component } from 'react'
import GIF from "../Gif"
import Table from '../Table'
<<<<<<< HEAD
=======

>>>>>>> origin/shambhavir

>>>>>>> fixed issue 45

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
            
           
            <div
              style={{
<<<<<<< HEAD
<<<<<<< HEAD
                backgroundColor: "green",
                display: "flex",
=======
                //backgroundColor: "#6693AC",
                //display: "flex",
>>>>>>> fixed issue 45
=======
                //backgroundColor: "#6693AC",
                //display: "flex",
>>>>>>> origin/shambhavir
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              >
<<<<<<< HEAD
<<<<<<< HEAD
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
            <center>
              <button style={{ margin: "20px", padding:"10px"}} onClick={this.snap}>
                Thanos Snap
              </button>
            </center>
          </div>
        </div>
    )
  }
=======
=======
>>>>>>> origin/shambhavir
              {/* <RandomImage
                  page={page * 5}
                  style={pictureStyling}
                />
              <RandomImage
                  page={page * 9}
                  style={pictureStyling}
                />
              <RandomImage
                  page={page * 13}
                  style={pictureStyling}
                /> */}
                { 
                  <Table/>

                 
                }
                <div style={{
                //backgroundColor: "#6693AC",
                //display: "flex",
                //height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }} >
<GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
                  <GIF gifsrc="https://media.giphy.com/media/J0WeVOLjuqW2I/giphy.gif"/>
  </div>
                
            </div>

           
          </div>
        </div>
    )
    
<<<<<<< HEAD
>>>>>>> fixed issue 45
=======
>>>>>>> origin/shambhavir
}



// class Table extends Component {
//   state = {}
//   constructor(props) {
//       super(props);
//   }

// render () {
//   return (
    

//       <table className = 'Signs'>
//       <tr>
//           <th colspan="4">Most to Least Common Zodiac Signs</th>
//       </tr>
//       <tr>
//           <th>Rank</th>
//           <th>Sign</th>
//           <th>Dates</th>
//           <th>% of US Population</th>
//       </tr>
//       <tr>
//           <td>1</td><td>Scorpio</td><td>October 23rd to November 21st</td><td>9.6%</td>
//       </tr>
//       <tr>
//           <td>2</td><td>Virgo</td><td>August 23rd to September 22nd</td><td>9.4%</td>
//       </tr>
//       <tr>
//           <td>3</td><td>Gemini</td><td>May 21st to June 20th</td><td>9.3%</td>
//       </tr>
//       <tr>
//           <td>4</td><td>Pisces</td><td>February 19th to March 20th</td><td>9.1%</td>
//       </tr>
//       <tr>
//           <td>5</td><td>Libra</td><td>September 23rd to October 22nd</td><td>8.8%</td>
//       </tr>
//       <tr>
//           <td>6</td><td>Cancer</td><td>June 21st to July 22nd</td><td>8.5%</td>
//       </tr>
//       <tr>
//           <td>7</td><td>Taurus</td><td>April 20th to May 20th</td><td>8.3%</td>
//       </tr>
//       <tr>
//           <td>8</td><td>Capricorn</td><td>December 22nd to January 19th</td><td>8.2%</td>
//       </tr>
//       <tr>
//           <td>9</td><td>Aries</td><td>March 21st to April 19th</td><td>8.1%</td>
//       </tr>
//       <tr>
//           <td>10</td><td>Sagittarius</td><td>November 22nd to December 21st</td><td>7.3%</td>
//       </tr>
//       <tr>
//           <td>11</td><td>Leo</td><td>July 23rd to August 22nd</td><td>7.1%</td>
//       </tr>
//       <tr>
//           <td>12</td><td>Aquarius</td><td>January 20th to February 18th</td><td>6.3%</td>
//       </tr>
//   </table>


//   );
// }
// }
export default About
//export default Table; 