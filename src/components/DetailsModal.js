import React, { Component } from 'react'
import PropTypes from 'prop-types'
class DetailsModal extends Component {


   render() {

    const { products, schedule } = this.props;

    const trimmedSchedule = schedule.substr(0,schedule.indexOf(";"));



    let prodKey = 1;
    const productList = products.split("; ").map(product => {

        return   <div className="col-12 table-row product" key={prodKey++}>{product}</div>
    })



    return (
        <div className={this.showModal()}>
          <div className="m-header">
              <h2 className="market-title-modal">{this.props.name}</h2>
              <div className="schedule"><i className="fa fa-calendar" aria-hidden="true"></i>{trimmedSchedule}</div>
              <div className="address">{this.props.address}</div>
          </div>
        <div className="product-wrapper">
          <div className="container-fluid">
            <div className="row">
               <div className="product-header col-12">Products:</div>
               {this.props.products ? productList : <div className="col-12 table-row product">Sorry. This market did not list any products!</div>}
            </div>
          </div>
        </div>
        <div className="spacer" style={{clear: 'both'}}></div>
      </div>
        )
   }
}

export default DetailsModal

DetailsModal.propType = {
    details: PropTypes.string.isRequired
}
