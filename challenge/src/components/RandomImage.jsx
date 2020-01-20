import React from 'react'

const RandomImage = (props) => {
return(
    <img
        src={"https://picsum.photos/id/" + props.page + "/500"}
        alt="RandomizedPicsum"
        height="20%"
        width="20%"
        style= {props.style}

    ></img>
)
}

export default RandomImage

