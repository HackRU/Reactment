import React from 'react'
import JojoStand from '../JojoStand'
import RandomAds from "../RandomAds";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      standsVisibility: [
        true, true, true, true
      ],
      length: 4
    }
  }
  snap = () => {
    var stands = [...this.state.standsVisibility];

    for (var i = 0; i < this.state.length / 2; i++) {

      //Randomly select which is disintegrated 
      var RandomNum = Math.floor(Math.random() * 4);
      //console.log("disappear: ", RandomNum);

      if (this.state.length <= 1) {
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
    this.setState({
      standsVisibility: stands,
      length: this.state.length / 2
    })
  }

  render() {
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
                isVisible={this.state.standsVisibility[i]}
              />
            })}
          </div>
          <div style={{ backgroundColor: "whitesmoke" }}>
            <br />
          </div>
          <center>
            <button style={{ margin: "20px", padding: "10px" }} onClick={this.snap}>
              Thanos Snap
              </button>
          </center>
        </div>
      </div>
    )
  }
}

export default About
