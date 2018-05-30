import React, { Component } from 'react'
import PropTypes from 'prop-types'
class DetailsModal extends Component {
     


    
   render() {
       
    const { products } = this.props;
       

    let prodKey = 1;
    const productsArr = products.split("; ").map(product => {
       
        return   <li className="market-product" key={prodKey++}>{product}</li>
           
    })
    const productList = <ul className="product-list">{productsArr}</ul> 
    
      
       
    return (
        <div className="market-modal">
             <h2></h2>
            <div className="products-wrapper">
                <h3 className="products-header">Products:</h3>
                {this.props.products ? productList : <div className="market-modal">Sorry. This market did not list any products!</div>}
            </div>
        </div>
        )   
   }      
} 

export default DetailsModal

DetailsModal.propType = {
    details: PropTypes.string.isRequired
}