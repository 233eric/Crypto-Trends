import React, { Component } from "react";
import "./CSS/App.css";
import "./CSS/table.css";
import "./images/bitcoin.png";
import "./images/ethereum.png";
import "./images/ripple.png";
import "./images/litecoin.png";
import "./images/bitcoincash.png";
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
            <a href="#brand">Eric Thai</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="https://github.com/233eric">
              Github
            </NavItem>
            <NavItem eventKey={2} href="#">
              LinkedIn
            </NavItem>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="text" placeholder="Search" />
            </FormGroup>{" "}
            <button className="button" type="submit">
              Submit
            </button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

class Page extends React.Component {
  render() {
    return (
      <Pager>
        <Pager.Item previous href="#">
          &larr; Previous Page
        </Pager.Item>
        <Pager.Item next href="#">
          Next Page &rarr;
        </Pager.Item>
      </Pager>
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
                        <th class="column1">Name</th>
                      </tr>
                    </thead>
                    <Name rank="0"/>
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
                          <th class="column7">Search Volume</th>
                          <th class="column8">Change (24h)</th>
                        </tr>
                      </thead>
                      <Price rank="0"/>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Page />
      </div>
    );
  }
}


export default App;
