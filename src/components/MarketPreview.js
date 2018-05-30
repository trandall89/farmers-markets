import React, { Component } from 'react';
class MarketPreview extends Component {

 
 

    
     
     
    render() {
    
   const  { name } = this.props
   
   const miles = name.trim().substr(0,name.indexOf(" "));
   const marketName = name.trim().substr(name.indexOf(" "));
     
     

    return this.props ? (
      <li className="list-item"  data-name={this.getName}>
        name:  <div id={this.props.id}>{marketName}</div>  |  <div> {miles} miles away</div>  
         
      </li>


    ):
    <div></div>
  }
}


export default MarketPreview
