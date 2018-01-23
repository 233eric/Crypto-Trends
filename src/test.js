import React, { Component } from "react";
import "./App.css";
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
import Price from "./api.js";


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
              Linkedin
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
    const status = "CRYPTOCURRENCY SEARCH VOLUME";
    return (
      <div>
        <Bar />
        <div className="status">{status}</div>
        <div className="Headernum"> # </div>
        <div className="Headername"> Name </div>
        <div className="numbers">1.</div>
        <button className="square">
          <img
            src={require("./images/bitcoin.png")}
            alt="logo"
            className="logo"
          />
          Bitcoin
          <img
            src={require("./images/bitcoin.png")}
            alt="logo"
            className="logo"
          /> <Price coin="bitcoin"></Price>
        </button>
        <div className="numbers"> 2. </div>
        <button className="square">
          <img
            src={require("./images/ethereum.png")}
            alt="logo"
            className="logo"
          />
          Ethereum
          <img
            src={require("./images/ethereum.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 3. </div>
        <button className="square">
          <img
            src={require("./images/bitcoincash.png")}
            alt="logo"
            className="logo"
          />
          Bitcoin Cash
          <img
            src={require("./images/bitcoincash.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 4. </div>
        <button className="square">
          <img
            src={require("./images/ripple.png")}
            alt="logo"
            className="logo"
          />
          Ripple
          <img
            src={require("./images/ripple.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 5. </div>
        <button className="square">
          <img
            src={require("./images/litecoin.png")}
            alt="logo"
            className="logo"
          />
          Litecoin
          <img
            src={require("./images/litecoin.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers">6.</div>
        <button className="square">
          <img
            src={require("./images/bitcoin.png")}
            alt="logo"
            className="logo"
          />
          Bitcoin
          <img
            src={require("./images/bitcoin.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 7. </div>
        <button className="square">
          <img
            src={require("./images/ethereum.png")}
            alt="logo"
            className="logo"
          />
          Ethereum
          <img
            src={require("./images/ethereum.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 8. </div>
        <button className="square">
          <img
            src={require("./images/bitcoincash.png")}
            alt="logo"
            className="logo"
          />
          Bitcoin Cash
          <img
            src={require("./images/bitcoincash.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 9. </div>
        <button className="square">
          <img
            src={require("./images/ripple.png")}
            alt="logo"
            className="logo"
          />
          Ripple
          <img
            src={require("./images/ripple.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <div className="numbers"> 10. </div>
        <button className="square">
          <img
            src={require("./images/litecoin.png")}
            alt="logo"
            className="logo"
          />
          Litecoin
          <img
            src={require("./images/litecoin.png")}
            alt="logo"
            className="logo"
          />
        </button>
        <Page />
      </div>
    );
  }
}

export default App;
