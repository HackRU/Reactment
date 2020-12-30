import React from 'react'

export default class MonthAndYear extends React.Component {
    getDateDifference(){
        // Milliiseconds in a day
        var one_day = 86400000;
        var currentDate = new Date();
        var fallSemester = new Date("09/1/2020");
        // Gets difference of fallsemester and current date
        var result = Math.round((fallSemester.getTime() - currentDate.getTime()) / (one_day)); 
        if(result > 0){
            return result + " days until Fall 2020 Begins!";
        }else if(result === 0){
            return "Semester has begun";
        }else if(result < 0){
            return "Semester In Progress";
        }
    }
    render() {
        var date = new Date();
        var year = date.getFullYear();
        var month = date.toLocaleString('default', {month: 'long'});
        
        return (
            <div>            
                <h1 style={{textAlign: "center"}}>It is {month} {year}</h1>
                <h1 style={{textAlign: "center"}}>{this.getDateDifference()}</h1>
            </div>

        )
    }
}