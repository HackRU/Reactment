import React from 'react'

class SponsorForm extends React.Component {

  constructor () {
    super();
    this.state = {name: '',amount: ''};
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
      <form onSubmit={this.handleSubmit}>
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
          <label>Name:</label>
          <input type="text" name="name" onChange={this.handleChange}/>
        <label>Amount:</label>
        <input type="number" name="amount" onChange={this.handleChange} />
        </div>
        <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "row"
        }}>
        <input type="submit" value="Become A Sponsor Now!" />
        </div>
      </form>
    );
  }
}
export default SponsorForm
