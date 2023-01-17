import React, { Component } from 'react';
import friesURI from './images/fries.jpg';

class FriesWithSauce extends Component {

    render() {
        return (
            <img
                width="995"
                height="200"
                src={friesURI}
            />
        )
    }
}

export default FriesWithSauce;