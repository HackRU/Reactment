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





// Leaving this here in memory of my poor if statements that got attacked
        // this is gonna be a lotta if statements rip
        // if(monthNum===1) {
        //     month = "January"
        // } else if(monthNum===2) {
        //     month = "February"
        // } else if(monthNum===3) {
        //     month = "March"
        // } else if(monthNum===4) {
        //     month = "April"
        // } else if(monthNum===5) {
        //     month = "May"
        // } else if(monthNum===6) {
        //     month = "June"
        // } else if(monthNum===7) {
        //     month = "July"
        // } else if(monthNum===8) {
        //     month = "August"
        // } else if(monthNum===9) {
        //     month = "September"
        // } else if(monthNum===10) {
        //     month = "October"
        // } else if(monthNum===11) {
        //     month = "November"
        // } else if(monthNum===12) {
        //     month = "December"
        // } else {
        //     month = "wtf is going on"
        // }