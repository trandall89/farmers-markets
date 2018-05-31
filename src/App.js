import React, { Component } from 'react';
import './App.css';
import MarketList from './components/MarketList';
import DetailsModal from './components/DetailsModal';
import ZipSearch from './components/ZipSearch';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markets: null,
      marketId: null,
      details: null,
      currName: null
    }
  }
  // checkClickEvent = evt => {
  //   if (event.target.id == "Submit") {
  //
  //
  //   }
  //
  // }
  fetchMarketDetails = evt => {
    const marketId = evt.target.id
    const currName = evt.target.innerHTML
    const url = "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/mktDetail?id="
              + marketId
    fetch(url)
      .then(r => r.json())
      .then( (details) => {
        const marketDetails = details.marketdetails
        return marketDetails
      })
      .then(details => {
        this.setState({
          marketId,
          details,
          currName,
          showModal:true
        })
      })
  }

  fetchMarkets = zip => {
    const url = "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip
    fetch(url)
      .then(r => r.json())
      .then( (marketList) => {
        const results = marketList.results
        return results
      })
      .then(markets => {
        this.setState({
          markets
        })
      })

    }

  componentWillMount() {


}

  render() {

    const marketData = this.state.markets ? this.state.markets : null;

    return (

    <div className="App" onClick={this.fetchMarketDetails}>
      <h1 className="market-list-title">80301 Farmers Markets</h1>
      <ZipSearch />
      {this.state.zip ?

        <MarketList
          markets = {marketData} /> :
          null
      }
        {this.state.marketId ? <DetailsModal
                                  products={this.state.details.Products}
                                  name={this.state.currName}
                                  schedule={this.state.details.Schedule}
                                  address={this.state.details.Address}
                                  googleLink={this.state.details.GoogleLink}/>
                                  : null}
    </div>
      )
  }
}

export default App;
