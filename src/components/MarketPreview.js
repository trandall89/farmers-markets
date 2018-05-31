import React, { Component } from 'react';
class MarketPreview extends Component {







    render() {

   const  { name } = this.props

   const miles = name.trim().substr(0,name.indexOf(" "));
   const marketName = name.trim().substr(name.indexOf(" "));



    return this.props ?
    <div className="market">

      <div className="row">
        <div id={this.props.id}  className="list-item list-item-name col-lg-4" data-name={this.getName}>{marketName}</div>
        <div className="list-item list-item-miles col-lg-2"><i className="fa fa-car" aria-hidden="true"></i>{miles} miles away</div>
      </div>
    </div>


    :
    <div></div>
  }
}


export default MarketPreview
