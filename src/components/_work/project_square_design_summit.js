import React, { Component } from 'react';
import Modal from '../modal';

class SquareDesignSummit extends Component {
  render() {
    return (
      <Modal
        title='Square Design Summit'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Gallery></Modal.Gallery>
      </Modal>
    )
  }
}

export default SquareDesignSummit;
