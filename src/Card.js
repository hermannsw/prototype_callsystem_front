import React, { Component } from 'react';
import './Card.css';

const API_URL = process.env.REACT_APP_BACKEND;
const S3_URL = process.env.REACT_APP_FRONT;


class Card extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      display: 'all',
    };
    this.dispModal = this.dispModal.bind(this);
    this.dispSwitch = this.dispSwitch.bind(this);
  }

  dispModal(item) {
    return this.props.dispModal(item);
  }

  dispSwitch(filter) {
    console.log('switch members: ' + filter);
    this.setState(() => {
      return {display: filter};
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(API_URL + '/users', {
      method: 'GET',
      mode: 'cors'
    }).then((response) => response.json())
    .then((responseData) => {
      this.setState({
        data: responseData,
      })
    })
  }

  render () {
    // TODO: カードのボタン周囲で隙間が発生する
    // chromeの検証ウインドウを開いている場合に発生
    // 普通に表示する分には問題なし
    const items = this.state.data.map((item) => {
      let imgName = S3_URL + `/image/${item.image_filename}`;
      if(this.state.display === 'director') {
        if(item.position === 'Director') {
          return (
            <div className="card text-center" key={item.last_name} onClick={(e) => this.dispModal(item, e)}>
              <img className="card-img-top img-fluid" src={imgName} alt="Profile" />
              <div className="card-block card-block-padding">
                <h4 className="card-title">{item.last_name} {item.first_name}</h4>
                <p className="card-text">{item.position}</p>
              </div>
            </div>
          )
        }
      } else if(this.state.display === 'engineer') {
        if(item.position === 'Engineer') {
          return (
            <div className="card text-center" key={item.last_name} onClick={(e) => this.dispModal(item, e)}>
              <img className="card-img-top img-fluid" src={imgName} alt="Profile" />
              <div className="card-block card-block-padding">
                <h4 className="card-title">{item.last_name} {item.first_name}</h4>
                <p className="card-text">{item.position}</p>
              </div>
            </div>
          )
        }
      }
    })

    return (
      <div className="card-deck">
        {items}
      </div>
    );
  }
}

export default Card;
