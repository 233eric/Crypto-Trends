import React, { Component } from "react";
import "./CSS/App.css";
import "./CSS/table.css";
import {
  Navbar,
  Nav,
  NavItem,
  FormControl,
  FormGroup,
  Pager
} from "react-bootstrap";
import Price from "./api/data.jsx";
import Name from "./api/name.jsx";

class Bar extends React.Component {
  render() {
    return (
      <Navbar fixedTop inverse collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">CryptoTrends</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="https://github.com/233eric">
              Github
              <img
                src={require("./images/github.png")}
                alt="logo"
                class="github"
              />
            </NavItem>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <button className="button" onclick="find()">
              Submit
            </button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="card text-center">
        <div class="card-block">
          <h4 class="card-title">Created By Eric Thai</h4>
          <p class="card-text">
            Data from © 2018 Coinmarketcap
          </p>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Bar />
        <div className="Title">Cryptocurrency Trends</div>
        <div>
          <div>
            <div>
              <div class="table style">
                <div class="table-firstcol">
                  <table>
                    <thead>
                      <tr>
                        <th class="column">Name</th>
                      </tr>
                    </thead>
                    <Name rank="0" />
                  </table>
                </div>

                <div class="wrap-table-cols">
                  <div class="table-cols">
                    <table>
                      <thead>
                        <tr>
                          <th class="column2">Rank</th>
                          <th class="column3">Marketcap</th>
                          <th class="column4">Supply</th>
                          <th class="column5">USD Price</th>
                          <th class="column6">Change (24h)</th>
                          <th class="column7">Price BTC</th>
                          <th class="column8">Search Trends</th>
                        </tr>
                      </thead>
                      <Price rank="0" />
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
