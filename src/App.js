import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Navbar from './Navbar';
import Container from './Container';
import CardDetail from './CardDetail';

const modalRoot = document.getElementById('modal-root');


// Let's create a Modal component that is an abstraction around
// the portal API.
class Modal extends React.Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = document.createElement('div');
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modalRoot.removeChild(this.el);
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
      // Any valid React child: JSX, strings, arrays, etc.
      this.props.children,
      // A DOM element
      this.el,
    );
  }
}


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showModal: false,
        item: {}
    };

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleShow(item) {
    // this.state.item = item
    this.setState({
        showModal: true,
        item: item
    });
  }

  handleHide() {
    this.setState({showModal: false});
  }

  render() {
    // Show a Modal on click.
    // (In a real app, don't forget to use ARIA attributes
    // for accessibility!)
    const modal = this.state.showModal ? (
      <Modal>
        <div className="modal">
          <CardDetail item={this.state.item} />
          <button className="close" onClick={this.handleHide}></button>
        </div>
      </Modal>
    ) : null;

    return (
      <div className="App">
        <Navbar />
        <Container handleShow={(e) => { this.handleShow(e); }}/>
        {modal}
      </div>
    );
  }
}

export default App;
