import { Modal, Box, Typography } from '@mui/material';
import React, { Component } from 'react';
import nickYoungWhat from '../images/nickYoungWhat.jpg';
//import { withRouter } from "react-router";

export default class MuiModel extends Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.close = this.close.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateQuestion = this.updateQuestion.bind(this);
        this.state = {
            name: "",
            question: ""
        };
    }

    //all important functionality functions
    //submit the form to the Contact Us Link
    submit(e) {
        e.preventDefault();
        console.log("sucessfully submited");
        alert("submited");
        this.props.close();
        //add the question to the end of the url
        window.open(`/contact_us#${this.state.question}`, "_self");
        
    }


    //closing the modal
    close(e) {
        e.preventDefault();
        this.props.close();
    }

    updateName(e) {
        this.setState({
            name: e.target.value
        })
    }

    updateQuestion(e) {
        this.setState({
            question: e.target.value
        })
    }

    //all non-important styling functions
    mouseEnterCloseButton(e) {
        e.target.style.backgroundColor = "pink";
        e.target.style.color = "black";
    }

    mouseLeaveCloseButton(e) {
        e.target.style.backgroundColor = "red";
        e.target.style.color = "white";
    }

    mouseEnterSubmitButton(e) {
        e.target.style.backgroundColor = "darkgreen";
        e.target.style.color = "white";
    }

    mouseLeaveSubmitButton(e) {
        e.target.style.backgroundColor = "lightgreen";
        e.target.style.color = "black";
    }

    mouseEnterInput(e) {
        e.target.style.width = "40%";
    }

    mouseLeaveInput(e) {
        e.target.style.width = "auto";
    }



    render() {
        return (
            <div>
                <Modal
                    open={true}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box style={{
                        background: "lightpink", margin: "auto", textAlign: "center", width: "65%", marginTop: "25px", border: "50%", border: "25px solid pink", borderRadius: "10%"
                    }}>
                        <button style={{ backgroundColor: "red", padding: "10px", margin: "10px", cursor: "pointer" }} onClick={this.props.close} onMouseEnter={this.mouseEnterCloseButton} onMouseLeave={this.mouseLeaveCloseButton}>Close</button>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Ask a Question
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            Hey there! Welcome to the HACKRU playground! Any questions are thoughtful questions. There is no stupid question unless your professor is Mendez XD.

                            <p>
                                <img src={nickYoungWhat} alt="nickYoungWhat" />
                            </p>


                            <p>
                                <div>
                                    Name: <input name="name" placeholder="Enter your name here!" onChange={this.updateName} onMouseEnter={this.mouseEnterInput} onMouseLeave={this.mouseLeaveInput}></input>
                                </div>

                                <div>
                                    Question: <input name="question" placeholder="Enter your question here!" onChange={this.updateQuestion} onMouseEnter={this.mouseEnterInput} onMouseLeave={this.mouseLeaveInput}></input>
                                </div>
                            </p>


                            <button style={{ backgroundColor: "lightgreen", padding: "10px", margin: "10px", cursor: "pointer" }} onClick={this.submit} onMouseEnter={this.mouseEnterSubmitButton} onMouseLeave={this.mouseLeaveSubmitButton}>Submit</button>

                        </Typography>



                    </Box>

                </Modal>



            </div >


        )
    }
}