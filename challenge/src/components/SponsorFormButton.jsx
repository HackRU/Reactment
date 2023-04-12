import React from 'react';
import {Modal} from '@mui/material';
import {Typography} from '@mui/material';
import {Box} from '@mui/material';
import {useState} from 'react';

import Button from '@material-ui/core/Button';

const RandomImage = (props) => {

    const ModalStyle = {
        textAlign: 'center',
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

      
    const [modOpen, setModOpen] = useState(false);
    const handleOpen = () => setModOpen(true);
    const handleClose = () => setModOpen(false);

    const stars = " \u2728 ".repeat(props.rating);
    const spaces = props.sponserName !== "" ? " " +  props.sponserName: "";

    if (props.rating == 0){

        return(
        <React.Fragment>
            <Modal
                open={modOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalStyle}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                Sponsor alert: With the amount that{spaces!== "" ? spaces: " you"} donated, you are too broke to be a sponsor
                    </Typography>
                </Box>
            </Modal>
            <Button type="submit" onClick={() => handleOpen()} color="secondary" variant="outlined">Become A Sponsor Now!</Button>
        </React.Fragment>
        )
    }


return(
    <React.Fragment>
         <Modal
            open={modOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={ModalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {stars}<br></br>
                    {props.rating} star sponser!
                </Typography>
                <Typography style={{color: "red", fontWeight: "500px"}}>
                    Thank you{spaces}!
                </Typography>



            </Box>
        </Modal>
        <Button type="submit" onClick={() => handleOpen()} color="secondary" variant="outlined">Become A Sponsor Now!</Button>
    </React.Fragment>
)
}

export default RandomImage

