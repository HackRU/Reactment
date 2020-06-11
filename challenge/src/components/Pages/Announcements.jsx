import React from 'react'
import AnnouncementList from '../announce/AnnouncementComponent'


const Announcements = (props) => {
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

                <AnnouncementList />

              <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
              </div>
            </div>
          </div>
        </>
    )
}

export default Announcements