import React from 'react';
import PartyParrotImg from './images/Party_Parrot.gif';

export default function PartyParrot() {
    return (
        <div>
            <img
                width="200"
                height="200"
                src={PartyParrotImg}
                alt="pArTy PaRrOt" />
            <img
                width="200"
                height="200"
                src={PartyParrotImg}
                alt="oThEr pArTy PaRrOt" />
            <img
                width="200"
                height="200"
                src={PartyParrotImg}
                alt="pArTy PaRrOt" />
        </div>

    );
}