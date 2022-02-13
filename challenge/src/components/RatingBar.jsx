import Rating from '@mui/material/Rating'
import React, { Component } from 'react';
import Box from '@mui/material/Box';

class RatingBar extends Component {
    state = {
        sumValue: 0,
        value: 0,
        count: 0,
        hover: -1
    }
    render() { 
        return (
            <Box sx={{
                width: 500,
                display: 'block',
                alignItems: 'center',
                }}>
                <Rating 
                    name="precision-rating" 
                    onChange={(event, newValue) => {
        
                        this.setState({
                            count: this.state.count + 1,
                            sumValue: this.state.sumValue + newValue
                        }, () => {
                            this.setState({value: (this.state.sumValue/ this.state.count)});
                            console.log(this.state.count);
                        });
                      }}
                    onChangeActive={(event, newHover) => {
                        this.setState({hover: newHover});
                    }}
                    value={this.state.value} 
                    precision={0.1}/>
            {this.state.value !== null && (
                <Box sx={{ ml: 2 }}>
                    {this.state.hover !== -1 ? 
                        this.state.hover : this.state.value}</Box>
            )}

            <h1>{this.state.value >= 4.2 ? "WE ARE CERTIFIED" : "GIVE US A 5 STAR!!!"}</h1> 
            </Box>
        );
    }
}
 
export default RatingBar;
