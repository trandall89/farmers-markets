import React, { Component } from 'react';
import './App.css';
import MarketList from './components/MarketList';
import DetailsModal from './components/DetailsModal';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      markets: [],
      marketId: null,
      details: null,
      name: null
    }
  }
  
  fetchMarketDetails = evt => {
    const marketId = evt.target.id
    const name = evt.target.id ? evt.target.innerHTML : null
    
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
          currName:name
        })
      })
  }

  
    

  componentWillMount() {
   
  const fetchMarkets = zip => {
    const url = "http://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=" + zip
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
    
  fetchMarkets(80301);

  
  
 
  
  


  }

  

  render() {
    
    
    const marketData = this.state.markets ? this.state.markets : null;

    return (
    
    <div className="App" onClick={this.fetchMarketDetails}>
      <h1>Beautiful List of Markets (not ugly)</h1>
      {this.state ?
      
        <MarketList
          markets = {marketData} /> :
          <App></App>
      }
        {this.state.marketId ? <DetailsModal 
                                  products={this.state.details.Products}
                                  name={this.state.Currname}/>
                                  : null}
    </div>      
      
      
      
      
      ) 
    


  }
}

export default App;
