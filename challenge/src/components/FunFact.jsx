import React, { useState } from "react";
import ls from "local-storage";
import { useEffect } from "react";

export default function FunFact() {
    const [facts, setFacts] = useState([]);
    const [disabled, setDisabled] = useState(false);
    useEffect(() => {
        if(ls.get("facts") != null) {
            setFacts(ls.get("facts"));
        }
    }, []);

    async function getFact() {
        setDisabled(true);
        const headers = { "X-Api-Key": process.env.REACT_APP_API_NINJAS_API_KEY};
        const response = await fetch( `https://api.api-ninjas.com/v1/facts`, { headers } );
        if(!response.ok) {
            alert("Was not able to retrieve fact");
            throw new Error("Was not able to retrieve fact.");
        }
        const data = await response.json();
        const fact = data[0].fact;
        const newFacts = [...facts, fact];
        ls.set("facts", newFacts);
        setFacts(newFacts); 
        setDisabled(false);
    }

    function clearFacts() {
        setFacts([]);
        ls.clear();
    }

    return (
        <div>
            <center>
                <button disabled={disabled} style={{cursor: "pointer"}} onClick={getFact}>Add Fun Fact</button>
                <button style={{cursor: "pointer"}} onClick={clearFacts}>Clear Facts</button>
            </center>   
            <center>
                <ul>
                    {facts.slice().reverse().map((factMessage, index) => (
                    <div>
                        <li key={index}>{factMessage}</li>
                        <br />
                    </div>
                    ))}
                </ul>
            </center>
        </div>
    )
}

