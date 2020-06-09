import React from 'react'
import JojoStand from '../JojoStand'

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
      var oldStands = this.state.standsVisibility.slice(0, this.state.length/2);
      var replacedStands = this.state.standsVisibility.slice(this.state.length/2);
      for(var i = 0; i < replacedStands.length; i++){
        replacedStands[i] = false;
      }
      var newStands = oldStands.concat(replacedStands);
      this.setState({
        standsVisibility: newStands,
        length: this.state.length/2
      })
    }
    render(){
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
                backgroundColor: "#6693AC",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
              >
              <JojoStand
                stand={"The World"}
                isVisible={this.state.standsVisibility[0]}
              />
              <JojoStand
                stand={"Hermit Purple"}
                isVisible={this.state.standsVisibility[1]}
              />
              <JojoStand
                stand={"Magician's Red"}
                isVisible={this.state.standsVisibility[2]}
              />
              <JojoStand
                stand={"Star Platinum"}
                isVisible={this.state.standsVisibility[3]}
              />                            
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
}

export default About