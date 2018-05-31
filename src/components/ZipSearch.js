import React, { Component } from 'react'

class ZipSearch extends Component {

  handleSubmit(event) {
    let zip = document.getElementById('zipInput').value;
    
    if(isNaN(zip) || typeof zip == "undefined" || !zip || zip.length < 5) {
      alert("Please Enter a valid zip code")
    }
     else
    event.preventDefault();
    this.props.fetchMarkets()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label className="search-instructions">
          Please input a valid zip code to search for Farmers Markets in your Area!

        </label><br /><input id="zipInput" type="text" value={this.props.zip} onChange={this.props.handleChange} />
        <input className="submit-btn" type="submit" value="Submit" />
      </form>
    );
  }
}

export default ZipSearch
