import React from 'react'

const JojoStand = (props) => {
    var stands = {
        "The World": "https://static.jojowiki.com/images/c/cb/TheWorldMangaAv.png",
        "Hermit Purple": "https://static.jojowiki.com/images/0/08/HermitPurpleMangaAv.png",
        "Magician's Red": "https://static.jojowiki.com/images/7/7c/MagicianRedMangaAv.png",
        "Star Platinum": "https://cdn.discordapp.com/attachments/701574644595032104/710625607503052800/StarPlatinumMangaAv.png"
    }
return(
    <div style= {props.style}>
        <center>
        <img
            src={stands[props.stand]}
            alt="RandomizedPicsum"
            height="75%"
            width="75%"
        ></img>
        <p>{props.stand}</p>
        </center>
    </div>
)
}

export default JojoStand

