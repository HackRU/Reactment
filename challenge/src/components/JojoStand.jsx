import React from 'react'

class JojoStand extends React.Component{
    visibility = () => {
        if(!this.props.isVisible){
            return "scale-down-center"
        }else{
            return ""
        }
    }
    render(){
        const standStyling = {
            margin: "5%",
            marginTop: "1%",
            marginBottom: "0",
            width: "25%"
        }
        return(
            <div style={standStyling} className={this.visibility()}>
                <center>
                    <img
                        src={this.props.url}
                        height="50%"
                        width="50%"
                        alt="It's an alien"
                    ></img>
                    <p>{this.props.stand}</p>
                </center>
            </div>
        )
    
    }
}

export default JojoStand

