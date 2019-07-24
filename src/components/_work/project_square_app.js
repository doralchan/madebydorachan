import React, { Component } from 'react';
import Modal from '../modal';

class SquareApp extends Component {
  render() {
    return (
      <Modal
        title='Square App'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Gallery></Modal.Gallery>
      </Modal>
    )
  }
}

export default SquareApp;
