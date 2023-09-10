import Rating from '@mui/material/Rating'
import React, { useState } from 'react';
import Box from '@mui/material/Box';

export default function RatingBar() {
    const [sumValue, setSumValue] = useState(0);
    const [value, setValue] = useState(0);
    const [count, setCount] = useState(0);
    const [hover, setHover] = useState(-1);

    return (
        <Box sx={{
            width: 500,
            display: 'block',
            alignItems: 'center',
        }}>
            <Rating
                name="precision-rating"
                onChange={(event, newValue) => {
                    setCount(count + 1);
                    setSumValue(sumValue + newValue);
                    setValue(sumValue / count);
                }}
                onChangeActive={(event, newHover) => {
                    setHover(newHover);
                }}
                value={value}
                precision={0.1} />
            {value !== null && (
                <Box sx={{ ml: 2 }}>
                    {hover !== -1 ?
                        hover : value}</Box>
            )}

            <h1>{value >= 4.2 ? "WE ARE CERTIFIED" : "GIVE US A 5 STAR!!!"}</h1>
        </Box>
    );
}