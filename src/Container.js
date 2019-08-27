import React, { Component } from 'react';
import $ from 'jquery';
import JobTag from './JobTag';
import Card from './Card';
import './Container.css';

const API_URL = process.env.REACT_APP_BACKEND;
const Twilio = window.Twilio;


class Container extends Component {

  constructor(props) {
    super(props);
    this.state = {
      display: 'all',
    }
    this.switchFilter = this.switchFilter.bind(this);
  }

  handleShow(item) {
    return this.props.handleShow(item);
  }

  switchFilter(filter) {
    // refsで子コンポーネントのメソッドを呼び出している
    return this.refs.card.dispSwitch(filter);
  }

  componentDidMount() {
    $.ajax({
      url: API_URL + '/client',
      dataType: 'jsonp',
      jsonCallback: 'callback'
    }).done(function(data) {

      Twilio.Device.setup(data.token);

      Twilio.Device.ready(function (device) {
        console.log('Twilio.Device Ready!');
      });

      Twilio.Device.error(function (error) {
        console.log('Twilio.Device Error: ' + error.message);
      });

      Twilio.Device.connect(function (conn) {
        console.log('Successfully established call!');
      });

      Twilio.Device.disconnect(function (conn) {
        console.log('Call ended.');
      });
    });
  }

  render() {
    return(
      <div className="container">
        <JobTag displayFilter={(e) => { this.switchFilter(e); }}/>
        <Card ref='card' dispModal={(e) => { this.handleShow(e); }}/>
      </div>
    )
  }
}

export default Container;
