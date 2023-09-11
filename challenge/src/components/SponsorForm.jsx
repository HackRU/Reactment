import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import SponsorFormButton from ".//SponsorFormButton";

export default function SponsorForm() {

    const [name, setName] = useState(localStorage.getItem("username") !== null ? localStorage.getItem("username") : "");
    const [amount, setAmount] = useState('');
    const [submittedName, setSubmittedName] = useState(localStorage.getItem("username") !== null ? localStorage.getItem("username") : "");
    const [rating, setRating] = useState(0);
    const [show, setShow] = useState(false);

    function handleChange(event) {
        if (event.target.name === "name") {
            setName(event.target.value);
        } else if (event.target.name === "amount") {
            setAmount(event.target.value);
        }
    }
    function handleSubmit(event) {
        if (amount > 0) {
            setShow(true);
            setSubmittedName(name);
            console.log('Name:' + name);
            console.log('Amount: $' + amount);
            if (amount >= 100) {
                setRating(5);
                setShow(true);
            } else if (amount >= 50) {
                setRating(4);
                setShow(true);
            } else if (amount >= 25) {
                setRating(3);
                setShow(true);
            } else if (amount >= 10) {
                setRating(2);
                setShow(true);
            } else if (amount < 10 && amount > 0) {
                setRating(1);
                setShow(true);
            }

            if (amount < 20 && amount > 0) {
                setRating(0);
                setShow(true);
            }
            event.preventDefault();
        } else {
            setShow(false);
            event.preventDefault();

        }
    }

    return (

        <form style={{ margin: "20px" }} onSubmit={handleSubmit}>

            <div
                style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"

                }}>
                DONATE NOW:
            </div>
            <div
                style={{
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}>

                <TextField style={{ margin: "10px" }} variant="filled" label="Name" type="text" name="name" value={localStorage.getItem("username") !== null ? localStorage.getItem("username") : ""} onChange={handleChange} />
                <TextField style={{ margin: "10px" }} variant="filled" label="Amount" type="number" name="amount" onChange={handleChange} />
            </div>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "row"
                }}>
                <SponsorFormButton
                    rating={rating}
                    sponserName={submittedName}
                    show={show}
                />




                <p>&nbsp;</p>

            </div>
        </form>
    );

}