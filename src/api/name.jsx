
import React, { Component } from "react";

const rank = rank =>
  `https://api.coinmarketcap.com/v1/ticker/?start=${rank}&limit=100`;

class Name extends Component {
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
  Id(i) {
    var pic = this.state.data[i].symbol.toLowerCase();
    return (
      <tr>
        <td class="column1"><img
            src={require("../images/"+pic+".png")}
            alt="logo"
            class="logo"
          />{this.state.data[i].name}</td>
      </tr>
    );
  }
  render() {
    if (!this.state.data) return <p>Loading...</p>;
    return (
      <tbody>
        {this.Id(0)}
        {this.Id(1)}
        {this.Id(2)}
        {this.Id(3)}
        {this.Id(4)}
        {this.Id(5)}
        {this.Id(6)}
        {this.Id(7)}
        {this.Id(8)}
        {this.Id(9)}
        {this.Id(10)}
        {this.Id(11)}
        {this.Id(12)}
        {this.Id(13)}
        {this.Id(14)}
        {this.Id(15)}
        {this.Id(16)}
        {this.Id(17)}
        {this.Id(18)}
        {this.Id(19)}
        {this.Id(20)}
        {this.Id(21)}
        {this.Id(22)}
        {this.Id(23)}
        {this.Id(24)}
        {this.Id(25)}
        {this.Id(26)}
        {this.Id(27)}
        {this.Id(28)}
        {this.Id(29)}
        {this.Id(30)}
        {this.Id(31)}
        {this.Id(32)}
        {this.Id(33)}
        {this.Id(34)}
        {this.Id(35)}
        {this.Id(36)}
        {this.Id(37)}
        {this.Id(38)}
        {this.Id(39)}
        {this.Id(40)}
        {this.Id(41)}
        {this.Id(42)}
        {this.Id(43)}
        {this.Id(44)}
        {this.Id(45)}
        {this.Id(46)}
        {this.Id(47)}
        {this.Id(48)}
        {this.Id(49)}
        {this.Id(50)}
        {this.Id(51)}
      </tbody>
    );
  }
}

export default Name;
