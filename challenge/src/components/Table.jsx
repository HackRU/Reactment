import React, { Component } from 'react'
import TableMUI from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCellMUI from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
const  TableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.dark,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
    },
  }))(TableCellMUI);

function createData(sign, date, percentage)
{
    return {sign, date, percentage};
}
const rows = [ 
    createData('Scorpio', 'October 23rd to November 21st', '9.6%'),
    createData('Virgo',	'August 23rd to September 22nd',	'9.4%'),
    createData('Gemini',' May 21st to June 20th', '9.3%'),
    createData('Pisces',' February 19th to March 20th', '9.1%'),
    createData('Libra ','September 23rd to October 22nd ','8.8% '),		
	createData('Cancer ','June 21st to July 22nd ','8.5% '),	 
	createData( 'Taurus ','April 20th to May 20th ', '8.3% '),				 
	createData( 'Capricorn ', 'December 22nd to January 19th ', '8.2% '),				 				 
	createData(	 'Aries ','March 21st to April 19th ','8.1% '),				 				 
	createData('Sagittarius ','November 22nd to December 21st ','7.3% '),								 
	createData( 'Leo ','July 23rd to August 22nd ', '7.1% '),				 				 
	createData('Aquarius ','January 20th to February 18th ','6.3% ')
];

class Table extends Component {
    state = {}
    constructor(props) {
        super(props);
    }

render () {
    return (
        <TableContainer>
            <TableMUI style={{ maxWidth: "800px", margin: '0 auto' }} size="small">
                <TableHead>
                    <TableRow>                      
                        <TableCell align="right">Rank</TableCell>
                        <TableCell align="right">Sign</TableCell>
                        <TableCell align="right">Dates</TableCell>
                        <TableCell align="right">% of US Population</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={index+1}>                
                    <TableCell align="right">{index+1}</TableCell>
                    <TableCell align="right">{row.sign}</TableCell>
                    <TableCell align="right">{row.date}</TableCell>
                    <TableCell align="right">{row.percentage}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </TableMUI>
        </TableContainer>    
    );
}
}
export default Table;