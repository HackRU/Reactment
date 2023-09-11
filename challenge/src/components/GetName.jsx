import React, { useState } from "react";

export default function GetName() {

    const [value, setValue] = useState("");
    const [hasName, setHasName] = useState(
        !(localStorage.getItem("username") === null || localStorage.getItem("username") === "")
    );

    function handleChange(event) {
        // capitalize first letter of every word in name
        const autoCaseVal = event.target.value.split(" ").map(w => w.charAt(0).toUpperCase() + w.substring(1, w.length).toLowerCase()).join(" ");
        setValue(autoCaseVal);
    }

    function handleSubmit(event) {
        event.preventDefault();
        localStorage.setItem("username", value);
        setValue("");

        console.log(hasName);
        setHasName(
            !(
                localStorage.getItem("username") === null ||
                localStorage.getItem("username") === ""
            )
        );
    }

    function changeNameSetup() {
        localStorage.removeItem("username");
        setHasName(
            !(
                localStorage.getItem("username") === null ||
                localStorage.getItem("username") === ""
            )
        );
    }

    if (hasName) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                Your name is {localStorage.getItem("username")}
                <button
                    style={{
                        "background-color": "#4CAF50" /* Green */,
                        border: "none",
                        color: "white",
                        padding: "15px 32px",
                        "font-size": "16px",
                    }}
                    onClick={changeNameSetup}
                >
                    Change Name
                </button>
            </div>
        );
    } else {
        return (
            <div
                className="NameForm"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            value={value}
                            onChange={handleChange}
                        />
                    </label>
                    <input
                        type="submit"
                        value="Submit"
                        style={{
                            "background-color": "#4CAF50" /* Green */,
                            border: "none",
                            color: "white",
                            padding: "15px 32px",
                            "font-size": "16px",
                        }}
                    />
                </form>
            </div>
        );
    }

}