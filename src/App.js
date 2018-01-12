import React, { Component } from 'react';
import './App.css';
import bitcoin from './images/bitcoin.png';
import ethereum from './images/ethereum.png';
import ripple from './images/ripple.png';
import litecoin from './images/litecoin.png';
import bitcoincash from './images/bitcoincash.png';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import {FormControl, FormGroup, ControlLabel} from 'react-bootstrap';
/*
class bar extends React.Component {

  render() {
    return (
      <div>
      <Navbar class="bar">
          <Navbar.Header>
          <Navbar.Brand>
              <a href="#">Eric Thai</a>
          </Navbar.Brand>
          </Navbar.Header>
          <Nav>
          <NavItem eventKey={1} href="#">Github</NavItem>
          <NavItem eventKey={2} href="#">Linkedin</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1} href="https://coinmarketcap.com/">Coinmarketcap</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
          </Nav>
      </Navbar>
      </div>
    );
  }
}
*/
class App extends React.Component {

  render() {
    const status = 'CRYPTOCURRENCY SEARCH VOLUME';
    return (
      <div>
      <Navbar fixedTop inverse collapseOnSelect>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#brand">Eric Thai</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav>
				<NavItem eventKey={1} href="#">
					Github
				</NavItem>
				<NavItem eventKey={2} href="#">
					Linkedin
				</NavItem>
			</Nav>
      <Navbar.Form pullRight>
				<FormGroup>
					<FormControl type="text" placeholder="Search" />
				</FormGroup>{' '}
				<button class="button" type="submit">Submit</button>
			</Navbar.Form>
		</Navbar.Collapse>
	</Navbar>
        <div className="status">{status}</div>
        <div className="Headernum"> # </div>
        <div className="Headername"> Name </div>
        <div className="numbers">1.</div>
        <button className="square">
          <img
          src={require('./images/bitcoin.png')}
          className="logo"
          />
           Bitcoin
          <img
          src={require('./images/bitcoin.png')}
          className="logo"
          />
        </button>
        <div className="numbers"> 2. </div>
        <button className="square">
         <img
         src={require('./images/ethereum.png')}
         className="logo"
         />
           Ethereum
          <img
          src={require('./images/ethereum.png')}
          className="logo"
          />
        </button>
        <div className="numbers"> 3. </div>
        <button className="square">
         <img
         src={require('./images/bitcoincash.png')}
         className="logo"
         />
           Bitcoin Cash
          <img
          src={require('./images/bitcoincash.png')}
          className="logo"
          />
        </button>
        <div className="numbers"> 4. </div>
        <button className="square">
         <img
         src={require('./images/ripple.png')}
         className="logo"
         />
           Ripple
         <img
         src={require('./images/ripple.png')}
         className="logo"
         />
        </button>
        <div className="numbers"> 5. </div>
        <button className="square">
         <img
         src={require('./images/litecoin.png')}
         className="logo"
         />
           Litecoin
         <img
         src={require('./images/litecoin.png')}
         className="logo"
         />
        </button>
      </div>
    );
  }
}

export default App;
