import React, { useState } from "react";

export default function Home() {
    const [buttonColor, setButtonColor] = useState(getRandomColor());

    function getRandomColor() {
        const colors = ["red", "green", "blue", "grey", "orange", "purple", "black"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    }

    const handleButtonClick = () => {
        const newColor = getRandomColor();
        setButtonColor(newColor);
    };

    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <button
                style={{ backgroundColor: buttonColor }}
                onClick={handleButtonClick}
            >
                Click Me!
            </button>
        </div>
    );
}