import React, { Component } from "react";

const rank= rank => `https://api.coinmarketcap.com/v1/ticker/?start=${rank}&limit=100`;


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
      <tbody>
      <tr>
        <td class="column1">
          {this.state.data[0].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[1].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[2].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[3].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[4].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[5].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[6].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[7].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[8].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[9].name}
        </td>
      </tr>
      <tr>
        <td class="column1">
          {this.state.data[10].name}
        </td>
      </tr>
      </tbody>
    );
  }
}

export default Name;
