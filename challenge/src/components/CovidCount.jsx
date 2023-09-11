import React, { useState } from 'react';

export default function CovidCount() {

    const date1 = new Date('01/20/2020');
    const date2 = new Date();
    const diffTime = Math.abs(date2 - date1);
    const [diffDays] = useState(Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    return (
        <div>
            <p><center>Number of days since Covid started: {diffDays} days</center></p>
        </div>
    );

}