import React,{ Component } from 'react';
import MarketPreview from './MarketPreview';
import PropTypes from 'prop-types';


class MarketList extends Component {


  render() {


      const markets = this.props.markets ? this.props.markets : null;
      return  (
         <div className="container-fluid list-wrapper">
          <div className="row">
            <div className="list-item col-header col-header-name col-lg-4">Market Name</div>
            <div className="list-item list-item-miles col-header col-header-miles col-lg-2">Distance from Zip</div>
          </div>
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
        </div>

      )
  }
}

MarketList.propTypes = {
  markets: PropTypes.array.isRequired,
  details: PropTypes.object
}

export default MarketList
