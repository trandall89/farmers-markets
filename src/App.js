import React, { Component } from 'react';
import './App.css';
import MarketList from './components/MarketList';
import axios from 'axios';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markets: []
    }
  }

  componentWillMount() {

  const fetchMarkets = zip => {
    axios.get("http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip)
      .then( (marketList) => {
        let markets = marketList.data.results;
        markets.forEach(market => {
          const marketId = market.id;
          axios.get('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id=' + marketId)
            .then(marketDesc => {
            market.details = marketDesc.data.marketdetails;
            })
        })
        this.setState({
          markets
        })

      })
    }
  fetchMarkets(80301);

  }

  render() {
    const marketData = this.state.markets ? this.state.markets : null;
    // const marketDetails = this.state.marketDetails ? this.state.marketDetails : null;
    return this.state.markets ? (
      <div className="App">
        <MarketList
          markets = {marketData} />
      </div>
    ):
    <div className="App"></div>
  }
}

export default App;
