import React, { Component } from "react";

const rank = rank =>
  `https://api.coinmarketcap.com/v1/ticker/?start=${rank}&limit=100`;

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

  Color(i) {
    if (this.state.data[i].percent_change_24h >= 0) {
      return (
        <td class="column6">
          <font color="green">{this.state.data[i].percent_change_24h}%</font>
        </td>
      );
    } else {
      return (
        <td class="column6">
          <font color="red">{this.state.data[i].percent_change_24h}%</font>
        </td>
      );
    }
  }

  Info(i) {
    if (this.state.data[i].price_usd < 0.01) {
      return (
        <tr>
          <td class="column2">{this.state.data[i].rank}</td>
          <td class="column3">
            ${(Math.round(this.state.data[i].market_cap_usd * 100) / 100
            ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </td>
          <td class="column4">
            {(Math.round(this.state.data[i].available_supply * 100) / 100
            ).toLocaleString()}
          </td>
          <td class="column5 digit">
            ${((this.state.data[i].price_usd * 100) / 100
            ).toLocaleString(undefined, { minimumFractionDigits: 5 })}
          </td>
          {this.Color(i)}
          <td class="column7" />
          <td class="column8" />
        </tr>
      )
    }
    return (
      <tr>
        <td class="column2">{this.state.data[i].rank}</td>
        <td class="column3">
          ${(Math.round(this.state.data[i].market_cap_usd * 100) / 100
          ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </td>
        <td class="column4">
          {(Math.round(this.state.data[i].available_supply * 100) / 100
          ).toLocaleString()}
        </td>
        <td class="column5 digit">
          ${(Math.round(this.state.data[i].price_usd * 100) / 100
          ).toLocaleString(undefined, { minimumFractionDigits: 2 })}
        </td>
        {this.Color(i)}
        <td class="column7" />
        <td class="column8" />
      </tr>
    );
  }

  render() {
    if (!this.state.data) return <p>Loading...</p>;
    return (
      <tbody>
        {this.Info(0)}
        {this.Info(1)}
        {this.Info(2)}
        {this.Info(3)}
        {this.Info(4)}
        {this.Info(5)}
        {this.Info(6)}
        {this.Info(7)}
        {this.Info(8)}
        {this.Info(9)}
        {this.Info(10)}
        {this.Info(11)}
        {this.Info(12)}
        {this.Info(13)}
        {this.Info(14)}
        {this.Info(15)}
        {this.Info(16)}
        {this.Info(17)}
        {this.Info(18)}
        {this.Info(19)}
        {this.Info(20)}
        {this.Info(21)}
        {this.Info(22)}
        {this.Info(23)}
        {this.Info(24)}
        {this.Info(25)}
        {this.Info(26)}
        {this.Info(27)}
        {this.Info(28)}
        {this.Info(29)}
        {this.Info(30)}
        {this.Info(31)}
        {this.Info(32)}
        {this.Info(33)}
        {this.Info(34)}
        {this.Info(35)}
        {this.Info(36)}
        {this.Info(37)}
        {this.Info(38)}
        {this.Info(39)}
        {this.Info(40)}
        {this.Info(41)}
        {this.Info(42)}
        {this.Info(43)}
        {this.Info(44)}
        {this.Info(45)}
        {this.Info(46)}
        {this.Info(47)}
        {this.Info(48)}
        {this.Info(49)}
        {this.Info(50)}
        {this.Info(51)}
      </tbody>
    );
  }
}

export default Price;
