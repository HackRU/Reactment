import React from 'react'
import AnnouncementList from '../announce/AnnouncementComponent'

const Announcements = (props) => {
    const page = props.currentpage
    const pictureStyling = {
        marginTop: "5%",
        marginBottom: "5%",
        marginRight: "5%",
        marginLeft: "5%"
    }
    return (
        <>
          <div>
            <div>
              <h1 style={{ fontSize: 100, color: "#F09F70" }}>
                <center>Announcements Page</center>
              </h1>
              <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
              </div>
              <div
                style={{
                    backgroundColor: "  #ff00bf",
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}
              >
                <AnnouncementList />

              </div>
              <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
              </div>
            </div>
          </div>
        </>
    )
}

export default Announcements