import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return(
      <header className="navbar-fixed-top">
        <h1>Call System</h1>
        <div className="header-right-wrapper">
          <form className="form-inline">
            <label>
              <div className="input-group mb-2 mr-sm-2 mb-sm-0 search-input">
                <input name="searchUser" type="text" className="form-control search-fontsize no-border" id="inlineFormInputGroup" placeholder="Search" />
                <div className="input-group-addon search-icon search-fontsize no-border">
                  <span className="glyphicon glyphicon-search"></span>
                </div>
              </div>
            </label>
          </form>
        </div>
        <NavbarBorder />
      </header>
    )
  }
}

class NavbarBorder extends Component {
  render() {
    return(
      <div className="row navbar-fixed-border">
        <div className="col-xs-1" style={{background:"#3fad46",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#cc3333",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#336699",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#f0ad4e",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#3fad46",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#cc3333",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#336699",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#f0ad4e",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#3fad46",height:"6px"}}></div>
        <div className="col-xs-1" style={{background:"#cc3333",height:"6px"}}></div>
      </div>
    )
  }
}

export default Navbar;
