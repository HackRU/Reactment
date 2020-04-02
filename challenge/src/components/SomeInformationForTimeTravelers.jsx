import React from 'react'

export default class SomeInformationForTimeTravelers extends React.Component {
    render() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.toLocaleString('default', {month: 'long'});

        return (
            <h1 style={{textAlign: "center"}}>It is {month} {year}</h1>
        )
    }
}