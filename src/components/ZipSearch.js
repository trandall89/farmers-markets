import React, { Component } from 'react'

class ZipSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
            zip: ""
          };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    this.setState({zip: event.target.value});

  }

  handleSubmit(event) {
    console.log(this.state.zip)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Please input a valid zip code to search for Farmers Markets in your Area!

        </label><br /><input type="text" value={this.state.zip} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZipSearch
