import React, { Component } from 'react';

class Table extends Component {
	state = {};

	render() {
		return (
			<table className="Signs">
				<tr>
					<th colspan="4">Most to Least Common Zodiac Signs</th>
				</tr>
				<tr>
					<th>Rank</th>
					<th>Sign</th>
					<th>Dates</th>
					<th>% of US Population</th>
				</tr>
				<tr>
					<td>1</td>
					<td>Scorpio</td>
					<td>October 23rd to November 21st</td>
					<td>9.6%</td>
				</tr>
				<tr>
					<td>2</td>
					<td>Virgo</td>
					<td>August 23rd to September 22nd</td>
					<td>9.4%</td>
				</tr>
				<tr>
					<td>3</td>
					<td>Gemini</td>
					<td>May 21st to June 20th</td>
					<td>9.3%</td>
				</tr>
				<tr>
					<td>4</td>
					<td>Pisces</td>
					<td>February 19th to March 20th</td>
					<td>9.1%</td>
				</tr>
				<tr>
					<td>5</td>
					<td>Libra</td>
					<td>September 23rd to October 22nd</td>
					<td>8.8%</td>
				</tr>
				<tr>
					<td>6</td>
					<td>Cancer</td>
					<td>June 21st to July 22nd</td>
					<td>8.5%</td>
				</tr>
				<tr>
					<td>7</td>
					<td>Taurus</td>
					<td>April 20th to May 20th</td>
					<td>8.3%</td>
				</tr>
				<tr>
					<td>8</td>
					<td>Capricorn</td>
					<td>December 22nd to January 19th</td>
					<td>8.2%</td>
				</tr>
				<tr>
					<td>9</td>
					<td>Aries</td>
					<td>March 21st to April 19th</td>
					<td>8.1%</td>
				</tr>
				<tr>
					<td>10</td>
					<td>Sagittarius</td>
					<td>November 22nd to December 21st</td>
					<td>7.3%</td>
				</tr>
				<tr>
					<td>11</td>
					<td>Leo</td>
					<td>July 23rd to August 22nd</td>
					<td>7.1%</td>
				</tr>
				<tr>
					<td>12</td>
					<td>Aquarius</td>
					<td>January 20th to February 18th</td>
					<td>6.3%</td>
				</tr>
			</table>
		);
	}
}
export default Table;
