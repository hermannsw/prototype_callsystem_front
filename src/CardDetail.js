import React, { Component } from 'react';
import './Card.css';
import './CardDetail.css';

const API_URL = process.env.REACT_APP_BACKEND;
const S3_URL = process.env.REACT_APP_FRONT;
const Twilio = window.Twilio;


class CardDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
        item: this.props.item,
    };
  }

  render() {
    let imgName = S3_URL + `/image/${this.state.item.image_filename}`;
    let telNum = `+81${this.state.item.tel_number}`;
    return (
      <div className="card text-center no-border no-margin-top" key={this.state.item.last_name} onClick={this.dispModal}>
        <img className="card-img-top img-fluid" src={imgName} alt="Profile" />
        <div className="card-block card-block-padding no-padding-bottom">
          <h4 className="card-title">{this.state.item.last_name} {this.state.item.first_name}</h4>
          <p className="card-text">{this.state.item.position}</p>
          <div className="card-btn-wrapper">
            <CallButton phone_num={telNum}/>
            <HangupButton />
            <SmsButton phone_num={telNum}/>
          </div>
        </div>
      </div>
    )
  }
}


class CallButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
        phoneNum: this.props['phone_num']
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var phoneNum = this.state['phoneNum'];

    var params = {
      PhoneNumber: phoneNum
    };

    console.log('Calling ' + params.PhoneNumber + '...');
    Twilio.Device.connect(params);
  }

  render() {
    return (
      <button className="btn btn-primary employee-call three-rows-call-btn-width" onClick={this.handleClick}>Call</button>
    );
  }
}


class HangupButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Disconnect');
    Twilio.Device.disconnectAll();
  }

  render() {
    return (
      <button className="btn btn-danger employee-hangup disabled three-rows-hangup-btn-width" onClick={this.handleClick}>Hangup</button>
    );
  }
}


class SmsButton extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    fetch(API_URL + '/sms', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({'phone_num': this.props.phone_num}),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      }).then(function(res){
        return res.text();
      }).then(function(text){
        console.log(text);
      });
  }

  render() {
    return (
      <button className="btn btn-primary three-rows-call-btn-width three-rows-call-btn-right" onClick={this.handleClick}>SMS</button>
    );
  }
}

export default CardDetail;
