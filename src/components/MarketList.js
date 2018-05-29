import React,{ Component } from 'react';
import MarketPreview from './MarketPreview';
import PropTypes from 'prop-types';


class MarketList extends Component {
  constructor(props) {
        super(props)

        this.state = {
            markets:[],
            marketDetails:{}
        }
    }




  render() {
      const markets = this.props.markets ? this.props.markets : null;
      return  (

        <ul>
          {markets.map(market =>

            <MarketPreview  key = {market.id}
                            id = {market.id}
                            name = {market.marketname}
                            marketInfo = {this.props.details}
                          />
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
