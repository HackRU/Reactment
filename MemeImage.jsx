import React from 'react';
import { Modal } from '@mui/material';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useState } from 'react';

const RandomImage = (props) => {

    const ModalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: "white",
        border: '2px solid black',
        boxShadow: 24,
        p: 4
    };


    const [modOpen, setModOpen] = useState(false);
    const handleOpen = () => setModOpen(true);
    const handleClose = () => setModOpen(false);




    return (
        <React.Fragment>
            <Modal
                open={modOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={ModalStyle}>
                    <img src={props.page} style={{ width: "100%"}}></img>
                    <center><h1 id="modal-modal-title">
                        {props.description}
                    </h1></center>
                </Box>
            </Modal>
            <img
                onClick={() => handleOpen()}
                src={props.page}
                alt={props.description}
                height="100%"
                width="100%"
                style={props.style}
                color = "white"
            ></img>
        </React.Fragment>
    )
}

export default RandomImage

