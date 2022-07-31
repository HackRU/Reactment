import React from 'react';
import {Modal} from '@mui/material';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {useState, useEffect} from 'react';

const RandomImage = (props) => {

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: "lightblue",
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

      
    const [modOpen1, setModOpen1] = useState(false);
    const handleOpen1 = () => setModOpen1(true);
    const handleClose1 = () => setModOpen1(false);
    
    


return(
    <React.Fragment>
         <Modal
            open={modOpen1}
            onClose={handleClose1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {props.description}
                </Typography>
                <img src={"https://picsum.photos/id/" + props.page + "/500"} style={{width: "50%", marginTop: "20px", border: "2px solid blue", borderRadius: "10px"}}></img>
                <br></br>
                <br></br>
                <a href={props.webLink} target="_blank" rel="noopener noreferrer">
                    <Typography style={{color: "blue", fontWeight: "500px"}}>
                        Click here to access!
                    </Typography>
                </a>
            </Box>
        </Modal>
        <img
            onClick={() => handleOpen1()}
            src={"https://picsum.photos/id/" + props.page + "/500"}
            alt="RandomizedPicsum"
            height="20%"
            width="20%"
            style= {props.style}

        ></img>
    </React.Fragment>
)
}

export default RandomImage

