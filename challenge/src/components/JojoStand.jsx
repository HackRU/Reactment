import React from 'react'

class JojoStand extends React.Component{
    constructor(props){
        super(props);
    }
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
        var stands = {
            "The World": "https://static.jojowiki.com/images/c/cb/TheWorldMangaAv.png",
            "Hermit Purple": "https://static.jojowiki.com/images/0/08/HermitPurpleMangaAv.png",
            "Magician's Red": "https://static.jojowiki.com/images/7/7c/MagicianRedMangaAv.png",
            "Star Platinum": "https://cdn.discordapp.com/attachments/701574644595032104/710625607503052800/StarPlatinumMangaAv.png"
        }
        return(
            <div style={standStyling} className={this.visibility()}>
                <center>
                    <img
                        src={stands[this.props.stand]}
                        height="50%"
                        width="50%"
                    ></img>
                    <p>{this.props.stand}</p>
                </center>
            </div>
        )
    
    }
}

export default JojoStand

