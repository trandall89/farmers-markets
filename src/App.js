import React, { Component } from 'react';
import './App.css';
import MarketList from './components/MarketList';
import DetailsModal from './components/DetailsModal';
import ZipSearch from './components/ZipSearch';

class App extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this)
    this.fetchMarkets = this.fetchMarkets.bind(this)
    

    this.state = {
      markets: null,
      marketId: null,
      details: null,
      currName: null,
      zip: ""
    }
  }
  
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
          currName
        })
      })
  }
  
  fetchMarkets = () => {
    const url = "https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + this.state.zip
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
    
   handleChange(event) {

    this.setState({zip: event.target.value});

  }

  componentWillMount() {


}

  render() {

    const marketData = this.state.markets ? this.state.markets : null;

    return (

    <div className="App" onClick={this.fetchMarketDetails}>
      <h1 className="market-list-title">Farmers Markets</h1>
      <ZipSearch
           zip={this.state.zip}
           handleChange={this.handleChange}
           fetchMarkets={this.fetchMarkets}
            />
      {this.state.markets ?
      <div>
        <h3 className="results-message">Showing results for {this.state.zip}</h3>
        <MarketList
          markets = {marketData}
          zip = {this.state.zip}/>
      </div>:
          null
      }
        {this.state.marketId ? <DetailsModal
                                  products={this.state.details.Products}
                                  name={this.state.currName}
                                  schedule={this.state.details.Schedule}
                                  address={this.state.details.Address}
                                  googleLink={this.state.details.GoogleLink}
                                 />
                                  : null}
    </div>
      )
  }
}

export default App;
