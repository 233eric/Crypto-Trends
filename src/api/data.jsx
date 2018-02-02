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
    var name = "https://trends.google.com/trends/explore?q=" + this.state.data[i].name;
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
          <td class="column7">{this.state.data[i].price_btc}</td>
          <td class="column8">
          <a href={name}>
          <img
            src={require("../images/trends.jpg")}
            alt="logo"
            class="trends"
            href="www.google.com"
          />
          </a>
          </td>
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
        <td class="column7">{this.state.data[i].price_btc}</td>
        <td class="column8">
        <a href={name}>
        <img
          src={require("../images/trends.jpg")}
          alt="logo"
          class="trends"
          href="www.google.com"
        />
        </a>
        </td>
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
        {this.Info(52)}
        {this.Info(53)}
        {this.Info(54)}
        {this.Info(55)}
        {this.Info(56)}
        {this.Info(57)}
        {this.Info(58)}
        {this.Info(59)}
        {this.Info(60)}
        {this.Info(61)}
        {this.Info(62)}
        {this.Info(63)}
        {this.Info(64)}
        {this.Info(65)}
        {this.Info(66)}
        {this.Info(67)}
        {this.Info(68)}
        {this.Info(69)}
        {this.Info(70)}
        {this.Info(71)}
        {this.Info(72)}
        {this.Info(73)}
        {this.Info(74)}
        {this.Info(75)}
        {this.Info(76)}
        {this.Info(77)}
        {this.Info(78)}
        {this.Info(79)}
        {this.Info(80)}
        {this.Info(81)}
        {this.Info(82)}
        {this.Info(83)}
        {this.Info(84)}
        {this.Info(85)}
        {this.Info(86)}
        {this.Info(87)}
        {this.Info(88)}
        {this.Info(89)}
        {this.Info(90)}
        {this.Info(91)}
        {this.Info(92)}
        {this.Info(93)}
        {this.Info(94)}
        {this.Info(95)}
        {this.Info(96)}
        {this.Info(97)}
        {this.Info(98)}
        {this.Info(99)}
      </tbody>
    );
  }
}

export default Price;
