import React from 'react'
import RandomImage from '../RandomImage'

const About = (props) => {
    const page = props.currentpage
    const pictureStyling = {
        marginTop: "5%",
        marginBottom: "5%",
        marginRight: "5%",
        marginLeft: "5%"
    }
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
                flexDirection: "row"
              }}
              >
              <RandomImage
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
                />
                
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
          </div>
        </div>
    )
}

export default About