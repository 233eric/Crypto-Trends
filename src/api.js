import React, { Component } from "react";

const usdprice = coin => "https://api.coinmarketcap.com/v1/ticker/bitcoin/";

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    fetch(usdprice(this.props.coin))
      .then(d => d.json())
      .then(d => {
        this.setState({
          data: d
        });
      });
  }
  render() {
    if (!this.state.data) return <p>Loading...</p>;
    return (
      <div>
        <p>{this.state.data.price_usd}</p>
      </div>
    );
  }
}

export default Price;
