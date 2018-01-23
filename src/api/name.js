import React, { Component } from "react";

const rank= rank => `https://api.coinmarketcap.com/v1/ticker/?start=${rank}&limit=1`;


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
  render() {
    if (!this.state.data) return <p>Loading...</p>;
    return (
      <tr>
        <td class="column1">
          {this.state.data[0].name}
        </td>
      </tr>
    );
  }
}

export default Name;
