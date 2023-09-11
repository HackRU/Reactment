import React from 'react'

export default function JojoStand(props) {
    const visibility = () => {
        if (!props.isVisible) {
            return "scale-down-center";
        } else {
            return "";
        }
    }

    const standStyling = {
        margin: "5%",
        marginTop: "1%",
        marginBottom: "0",
        width: "25%"
    }
    return (
        <div style={standStyling} className={visibility()}>
            <center>
                <img
                    src={props.url}
                    height="50%"
                    width="50%"
                    alt="It's an alien"
                ></img>
                <p>{props.stand}</p>
            </center>
        </div>
    )
}