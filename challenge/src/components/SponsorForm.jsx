import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SponsorForm extends React.Component {

  constructor () {
    super();
    this.state = {name: '',amount: '',};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    console.log('Name:' + this.state.name);
    console.log('Amount: $' + this.state.amount);
    event.preventDefault();
  }
  render () {
    return (
      <form style={{margin: "20px"}} onSubmit={this.handleSubmit}>
        <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
          
        }}>
        DONATE NOW:
        </div>
        <div
        style={{
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
     
        <TextField style={{margin: "10px"}} variant="filled" label="Name" style={{ color: "white" }} type="text" name="name" onChange={this.handleChange} />
        <TextField style={{margin: "10px"}}  variant="filled" label="Amount" type="number" name="amount" onChange={this.handleChange}/>
        </div>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
        <Button type="submit" color="secondary" variant="outlined">Become A Sponsor Now!</Button>
        </div>
      </form>
    );
  }
}
export default SponsorForm
