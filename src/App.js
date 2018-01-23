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
import Price from "./api/data.js";
import Name from "./api/name.js";

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
                    <tbody>
                      <Name rank="0"/>
                      <Name rank="1"/>
                      <Name rank="2"/>
                      <Name rank="3"/>
                      <Name rank="4"/>
                      <Name rank="5"/>
                      <Name rank="6"/>
                      <Name rank="7"/>
                      <Name rank="8"/>
                      <Name rank="9"/>
                      <Name rank="10"/>
                      <Name rank="11"/>
                      <Name rank="12"/>
                      <Name rank="13"/>
                      <Name rank="14"/>
                      <Name rank="15"/>
                      <Name rank="16"/>
                      <Name rank="17"/>
                      <Name rank="18"/>
                      <Name rank="19"/>
                      <Name rank="20"/>
                      <Name rank="21"/>
                      <Name rank="22"/>
                      <Name rank="23"/>
                      <Name rank="24"/>
                      <Name rank="25"/>
                      <Name rank="26"/>
                      <Name rank="27"/>
                      <Name rank="28"/>
                      <Name rank="29"/>
                      <Name rank="30"/>
                      <Name rank="31"/>
                      <Name rank="32"/>
                      <Name rank="33"/>
                      <Name rank="34"/>
                      <Name rank="35"/>
                      <Name rank="36"/>
                      <Name rank="37"/>
                      <Name rank="38"/>
                      <Name rank="39"/>
                      <Name rank="40"/>
                      <Name rank="41"/>
                      <Name rank="42"/>
                      <Name rank="43"/>
                      <Name rank="44"/>
                      <Name rank="45"/>
                      <Name rank="46"/>
                      <Name rank="47"/>
                      <Name rank="48"/>
                      <Name rank="49"/>
                    </tbody>
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
                      <tbody>
                        <Price rank="0"/>
                        <Price rank="1"/>
                        <Price rank="2"/>
                        <Price rank="3"/>
                        <Price rank="4"/>
                        <Price rank="5"/>
                        <Price rank="6"/>
                        <Price rank="7"/>
                        <Price rank="8"/>
                        <Price rank="9"/>
                        <Price rank="10"/>
                        <Price rank="11"/>
                        <Price rank="12"/>
                        <Price rank="13"/>
                        <Price rank="14"/>
                        <Price rank="15"/>
                        <Price rank="16"/>
                        <Price rank="17"/>
                        <Price rank="18"/>
                        <Price rank="19"/>
                        <Price rank="20"/>
                        <Price rank="21"/>
                        <Price rank="22"/>
                        <Price rank="23"/>
                        <Price rank="24"/>
                        <Price rank="25"/>
                        <Price rank="26"/>
                        <Price rank="27"/>
                        <Price rank="28"/>
                        <Price rank="29"/>
                        <Price rank="30"/>
                        <Price rank="31"/>
                        <Price rank="32"/>
                        <Price rank="33"/>
                        <Price rank="34"/>
                        <Price rank="35"/>
                        <Price rank="36"/>
                        <Price rank="37"/>
                        <Price rank="38"/>
                        <Price rank="39"/>
                        <Price rank="40"/>
                        <Price rank="41"/>
                        <Price rank="42"/>
                        <Price rank="43"/>
                        <Price rank="44"/>
                        <Price rank="45"/>
                        <Price rank="46"/>
                        <Price rank="47"/>
                        <Price rank="48"/>
                        <Price rank="49"/>
                      </tbody>
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
