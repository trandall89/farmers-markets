import React,{ Component } from 'react';
import MarketPreview from './MarketPreview';
import PropTypes from 'prop-types';


class MarketList extends Component {

   
  render() {
   
      
      const markets = this.props.markets ? this.props.markets : null;
      return  (
      
        <ul>
          {markets.map(market => {
          
          return (<MarketPreview  key = {market.id}
                            id = {market.id}
                            name = {market.marketname}
                            marketInfo = {market.details}
                            
                          />
                          );
          }
            
            
          )
        }
        </ul>

      )
  }
}

MarketList.propTypes = {
  markets: PropTypes.array.isRequired,
  details: PropTypes.object
}

export default MarketList
