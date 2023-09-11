import React from 'react';
import KrabbyPattyURI from './images/KrabbyPatty.png';

export default function KrabbyPatty() {
    function imageClick() {
        console.log('Are you feeling it now Mr. Krabs?!?');
    }

    return (
        <div>
            <img
                width="200"
                height="166"
                src={KrabbyPattyURI}
                onClick={imageClick}
                alt="Tasty Krabby Patty"
            />
        </div>
    );
}