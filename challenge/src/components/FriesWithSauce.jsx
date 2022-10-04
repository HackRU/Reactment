import React, {Component} from 'react';
import friesURI from './images/fries.jpg';

class FriesWithSauce extends Component
{

    render()
    {
        return (
                <img 
                width = "995"
                height = "200"
                style = {{
                    position: 'absolute',
                    top: '60%',
                    left: '15%',
                }}
                src = {friesURI}
                />
        )
    }
}

export default FriesWithSauce;