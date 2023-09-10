import React, { useEffect, useRef, useState } from "react";

export default function Kanye() {
    const [items, setItems] = useState([]);
    const DataLoaded = useRef(false);

    useEffect(() => {
        if (DataLoaded.current) return;
        fetch(
            "https://api.kanye.rest/"
        )
            .then((res) => res.json())
            .then((json) => {
                setItems(json);
                DataLoaded.current = true;
            })
    });

    return (
        <div className="Kanye">
            <h1>Kanye Quote of the Day: </h1>
            <h3>{items.quote}</h3>
        </div>
    )
}