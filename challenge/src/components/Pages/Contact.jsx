import React from 'react'
import RandomImage from '../RandomImage'
import RandomPhoneNumber from '../RandomPhoneNumber'
import RandomEmail from '../RandomEmail'
import ChatBox from '../chat/ChatBox'
import RandomAds from "../RandomAds";
import RatingBar from '../RatingBar'

const Contact = (props) => {
  const page = props.currentpage
  const pictureStyling = {
    marginTop: "5%",
    marginBottom: "5%",
    marginRight: "5%",
    marginLeft: "5%"
  }

  //get the question from the current URL that was passed from help button in main page
  //q will be passed as a placeholder for the chatbox
  let currentUrl = window.location.href;
  let q;
  if (currentUrl.includes("/contact_us#") === true) {
    let message = currentUrl.split("/contact_us#");
    q = message[1].replaceAll("%20"," ");
  } else {
    q = "";
  }



  return (




    <>
      <div>
        <RandomAds />
        <div>
          <h1 style={{ fontSize: 100, color: "#F09F70" }}>
            <center>Contact Page</center>
          </h1>
          <center><RatingBar /></center>
          <h1 style={{ fontSize: 25, color: "#F09F70" }}>
            <center> <RandomPhoneNumber /> </center>
          </h1>
          <h1 style={{ fontSize: 25, color: "#F09F70" }}>
            <center> <RandomEmail /> </center>
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
            <h1>
              <center style={{ fontSize: 30, color: "#FF0000" }}>Who Ya Gonna Call?</center>
              <center style={{ fontSize: 80, color: "#FFFF" }}>212-897-1964</center>
              <center style={{ fontSize: 50, color: "#FFFF" }}>GHOST-BUSTERS!</center>


            </h1>


          </div>
          <div style={{ backgroundColor: "whitesmoke" }}>
            <br />
          </div>
        </div>
      </div>
      <ChatBox helpButtonPassedQusetion={q} />
    </>
  )
}

export default Contact
