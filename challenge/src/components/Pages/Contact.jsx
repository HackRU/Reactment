import React from 'react'
import RandomImage from '../RandomImage'
import RandomPhoneNumber from '../RandomPhoneNumber'
import RandomEmail from '../RandomEmail'
import ChatBox from '../chat/ChatBox'

const Contact = (props) => {
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
                <center>Contact Page</center>
              </h1>
              <h1 style={{ fontSize: 25, color: "#F09F70" }}>
	                      <center> <RandomPhoneNumber/> </center>
              </h1>
              <h1 style={{ fontSize: 25, color: "#F09F70" }}>
	                      <center> <RandomEmail/> </center>
              </h1>
              <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
              </div>
              <div
                style={{
                    backgroundColor: "#546882",
                    display: "flex",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}
              >
                <RandomImage
                  page={page * 4}
                  style={pictureStyling}
                />
                <RandomImage
                  page={page * 8}
                  style={pictureStyling}
                />
                <RandomImage
                  page={page * 12}
                  style={pictureStyling}
                />

              </div>
              <div style={{ backgroundColor: "whitesmoke" }}>
                <br />
              </div>
            </div>
          </div>
          <ChatBox />
        </>
    )
}

export default Contact
