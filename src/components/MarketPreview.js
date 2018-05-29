import React, { Component } from 'react';

class MarketPreview extends Component {

  getData() {

  }




  render() {




    return this.props ? (

      <li>
        name : {this.props.name} <br />
        address: {this.props.details}

      </li>


    ):
    <div></div>
  }
}


export default MarketPreview
