import React from 'react'

class SponsorForm extends React.Component {

  constructor () {
    super();
    this.state = {name: '',amount: '',submittedName: '',rating: 0, show: false};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    this.setState({show: true, submittedName: this.state.name});
    console.log('Name:' + this.state.name);
    console.log('Amount: $' + this.state.amount);

    if(this.state.amount >= 100) {
      this.setState({rating: 5});
    } else if (this.state.amount >= 50) {
      this.setState({rating: 4});
    }  else if (this.state.amount >= 25) {
      this.setState({rating: 3});
    } else if (this.state.amount >= 10) {
      this.setState({rating: 2});
    } else {
      this.setState({rating: 1});
    }

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
        <p>&nbsp;</p>
        {this.state.show && <p>{this.state.rating} Star Sponsor:&nbsp; </p>}
        {this.state.show && <p> {this.state.submittedName}</p>}
        </div>
      </form>
    );
  }
}
export default SponsorForm
