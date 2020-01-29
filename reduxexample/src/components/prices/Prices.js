import React, { Component } from 'react';

class Prices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prices: []
    };
  }
  componentWillMount() {
    fetch(
      'https://api-v2.intrinio.com/securities/AAPL/prices?api_key=OmQ1ZmU0ZjQwNmNkYWM1ZjU5MTJjMmExYTU4ODk4Nzdi'
    )
      .then(res => res.json())
      //   .then(data => console.log(data));
      .then(data => this.setState({ prices: data.stock_prices }));
  }
  render() {
    const priceItems = this.state.prices.map(price => (
      <div key={price.adj_volume}>
        <h3>{price.close}</h3>
        <p>{price.open}</p>
        <p>{price.high}</p>
        <p>{price.low}</p>
      </div>
    ));
    return (
      <div>
        <h1>Prices</h1>
        {priceItems}
      </div>
    );
  }
}

export default Prices;
