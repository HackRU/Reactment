import React, { useState } from 'react';

export default function Counter() {

    const [count] = useState(491901);

    function randomize(max) {
        max = Math.trunc(Math.random() * max);
        return max;
    }

    return (
        <div className="counter" >
            <p className="text-right">This page has</p>
            <h1 id="count" className="text-right">{randomize(count)}</h1>
            <p className="text-right">views</p>
        </div>
    )

}
