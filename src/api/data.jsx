import React, { Component } from "react";

const rank = rank => `https://api.coinmarketcap.com/v1/ticker/?start=${rank}&limit=100`;

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
/*
  Color = () => {
    if (this.state.data[0].percent_change_24h >= 0) {
      return (<td class="column6">{this.state.data[0].percent_change_24h}%</td>);
    }
    else {
      return (<td class="column6">{this.state.data[0].percent_change_24h}%</td>);
    }
  }
*/
  render() {
    if (!this.state.data) return (<p>Loading...</p>);
    return (
      <tbody>
      <tr>
      <td class="column2">
      {this.state.data[0].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[0].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[0].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[0].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
        {this.state.data[0].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[1].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[1].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[1].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[1].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[1].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[2].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[2].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[2].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[2].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[2].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[3].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[3].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[3].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[3].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[3].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[4].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[4].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[4].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[4].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[4].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[5].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[5].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[5].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[5].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[5].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[6].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[6].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[6].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[6].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[6].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[7].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[7].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[7].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[7].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[7].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[8].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[8].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[8].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[8].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[8].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[9].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[9].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[9].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[9].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[9].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>
      <tr>
      <td class="column2">
      {this.state.data[10].rank}
      </td>
      <td class="column3">
      ${((Math.round(this.state.data[10].market_cap_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column4">
      {((Math.round(this.state.data[10].available_supply* 100)/100).toLocaleString())}
      </td>
      <td class="column5 digit">
        ${((Math.round(this.state.data[10].price_usd* 100)/100).toLocaleString(undefined, { minimumFractionDigits: 2 }))}
      </td>
      <td class="column6">
      {this.state.data[10].percent_change_24h}%
      </td>
      <td class="column7"></td>
      <td class="column8"></td>
      </tr>

      </tbody>
    );
  }
}

export default Price;
