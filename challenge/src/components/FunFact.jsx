import React, { useState } from "react";

export default function FunFact() {
    const [fact, setFact] = useState(null);
    
    async function getFact() {

    }

    return (
        <div>
            <button onClick={getFact}>Button Man</button>
        </div>
    )
}

