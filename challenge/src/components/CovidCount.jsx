import React, { Component } from 'react';

class CovidCount extends Component{
    constructor(props){
        super(props);
        const date1 = new Date('01/20/2020');
        const date2 = new Date();
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        this.state = diffDays;
        
       
    }

    ConsoleLog = ({ children }) => {
        console.log(children);
        return false;
      };

    render() {
        return(
            <div>
                <p><center>Number of days since Covid started: {this.state} days</center></p>
            </div>
        );
    }
}

export default CovidCount;