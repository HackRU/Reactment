import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

// Dont't Scroll down or else the buttons are gouing to overlap
// more animation and styles needed when focusing 

export default class Modal extends Component {

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

    //submit the form to the Contact Us Link
    submit(e) {
        e.preventDefault();
        console.log("sucessfully submited");
        alert("submited");
        this.props.close();
        window.open('/contact_us', "_self");
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
        e.target.style.width  = "auto";
    }

    render() {

        return (
            <div style={{ margin: "auto" }}>
                <div style={{
                    display: "block", /* Hidden by default */
                    position: "fixed", /* Stay in place */
                    zindex: "10000000", /* Sit on top */
                    paddingTop: "100px", /* Location of the box */
                    left: 0,
                    top: 0,
                    width: "100%", /* Full width */
                    height: "100%", /* Full height */
                    overflow: "auto", /* Enable scroll if needed */
                    backgroundColor: "rgb(0,0,0)", /* Fallback color */
                    backgroundColor: "rgba(0,0,0,0.4)" /* Black w/ opacity */
                }}>
                    <form style={{
                        position: "relative",
                        backgroundColor: "#e44560",
                        margin: "auto",
                        padding: 0,
                        paddingBottom: "0px",
                        border: "1px solid #888",
                        width: "80%",
                        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19)",
                        alignItems: "center"
                    }}>

                        <div>
                            <p style={{ color: "black", alignItems: "center" }}>Ask a Question

                                <button onMouseEnter={this.mouseEnterCloseButton} onMouseLeave={this.mouseLeaveCloseButton} style={{ margin: "auto", marginLeft: "20px", height: "auto", backgroundColor: "red", color: "white" }} onClick={this.close}>Close</button>
                                <span className="close"></span>
                                <div style={{ color: "black" }}>
                                    <div >
                                        Name: <input style={{width:"auto"}} onMouseEnter={this.mouseEnterInput} onMouseLeave={this.mouseLeaveInput} onChange={this.updateName} name="name" placeholder="Enter your name here!"></input>
                                    </div>

                                    <div>
                                        Question: <input style={{width:"auto"}} onMouseEnter={this.mouseEnterInput} onMouseLeave={this.mouseLeaveInput}   onChange={this.updateQuestion} name="questiion" placeholder="Enter questions here!"></input>
                                    </div>

                                    <button style={{ backgroundColor: "lightgreen" }} onMouseEnter={this.mouseEnterSubmitButton} onMouseLeave={this.mouseLeaveSubmitButton} onClick={this.submit}>Submit</button>
                                </div>
                            </p>
                        </div>
                    </form>

                </div>
            </div >
        )
    }
}