import React from 'react';
import ElonMuskURI from './images/ElonMusk.png';
import './ElonMuskAnimation.css';

export default function ElonMusk() {
    return (
        <div>
            <img class="zoom"
                src={ElonMuskURI}
                alt="tesla rocket guy"
            />
        </div>
    );
}