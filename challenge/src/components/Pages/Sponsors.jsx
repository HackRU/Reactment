import React from 'react'
import RandomImage from '../RandomImage'
import SponsorForm from '../SponsorForm'

const Sponsors = (props) => {
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
            <h1 style={{ fontSize: 100, color: "#FFC436" }}>
              <center>Sponsors Page</center>
            </h1>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
            <div
              style={{
                backgroundColor: "#115E7C",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <RandomImage
                  page={page * 6}
                  style={pictureStyling}
                />
              <RandomImage
                  page={page * 17}
                  style={pictureStyling}
                />
              <RandomImage
                  page={page * 24}
                  style={pictureStyling}
                />

            </div>
            <div
              style={{
                backgroundColor: "#115E7C",
                display: "flex",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row"
              }}
            >
              <SponsorForm/>
            </div>
            <div style={{ backgroundColor: "whitesmoke" }}>
              <br />
            </div>
          </div>
        </div>
    )
}

export default Sponsors
