import React from "react";
import RandomImage from "../RandomImage";
import SponsorForm from "../SponsorForm";
import RandomAds from "../RandomAds";

const Sponsors = (props) => {
  const page = props.currentpage;
  const pictureStyling = {
    marginTop: "5%",
    marginBottom: "5%",
    marginRight: "5%",
    marginLeft: "5%",
    border: "3px solid lightgreen",
    borderRadius: "10px",
  };
  const ModalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <RandomAds />

      <div>
        <h1 style={{ fontSize: 100, color: "#FFC436" }}>
          <center>Sponsors Page</center>
        </h1>
        <div style={{ backgroundColor: "whitesmoke" }}>
          <br />
          <p
            style={{
              textAlign: "center",
              margin: "auto",
              padding: "10px",
            }}
          >
            Hi
            {localStorage.getItem("username") !== null
              ? " " + localStorage.getItem("username")
              : ""}
            , consider becoming a sponsor today!
          </p>
          <div
            style={{
              backgroundColor: "#115E7C",
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <SponsorForm />
          </div>
          <div
            style={{
              backgroundColor: "green",
              display: "flex",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <RandomImage
              description="MacBook with appealing and updated operating system!"
              webLink="https://www.apple.com/macbook-pro/"
              page={page * 6}
              style={pictureStyling}
            ></RandomImage>

            <RandomImage
              description="Forest with serene hiking trail with numerous attractions along the way!"
              webLink="https://appalachiantrail.org/explore/hike-the-a-t/thru-hiking/"
              page={page * 17}
              style={pictureStyling}
            />
            <RandomImage
              description="Tranquil bookstoore with varied selections and book club meetings!"
              webLink="https://www.barnesandnobleinc.com/"
              page={page * 24}
              style={pictureStyling}
            />
          </div>
        </div>
        <div style={{ backgroundColor: "whitesmoke" }}>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
