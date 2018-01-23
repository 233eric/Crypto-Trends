import React, { Component } from "react";

const rank = rank => `https://api.coinmarketcap.com/v1/ticker/?start=${rank}&limit=1`;

class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    };
  }
  componentDidMount() {
    fetch(rank(this.props.rank))
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
      <tr>
      <td class="column2">
      {this.state.data[0].rank}
      </td>
      <td class="column3">
      ${this.state.data[0].market_cap_usd}
      </td>
      <td class="column4">
      {this.state.data[0].available_supply}
      </td>
      <td class="column5">
        ${this.state.data[0].price_usd}
      </td>
      <td class="column6">
      {this.state.data[0].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
    );
  }
}

export default Price;
