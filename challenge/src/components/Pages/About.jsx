import React from 'react'
import JojoStand from '../JojoStand'

class About extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        stands: [
          "The World",
          "Hermit Purple",
          "Magician's Red",
          "Star Platinum"
        ],
      }
    }
    renderStands = () => {
      const standStyling = {
        margin: "5%",
        marginTop: "1%",
        marginBottom: "0",
        width: "25%"
      }
      return this.state.stands.map( stand => {
        return (<JojoStand
          stand={stand}
          style={standStyling}
        />)
      });
    }
    snap = () => {
      var newStands = this.state.stands.slice(0,this.state.stands.length/2);
      this.setState({
        stands: newStands
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
              {this.renderStands()}
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