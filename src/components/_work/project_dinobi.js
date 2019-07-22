import React, { Component } from 'react';
import Modal from '../modal';

class Dinobi extends Component {
  render() {
    return (
      <Modal
        title='Dinobi'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Gallery>
        </Modal.Gallery>
      </Modal>
    )
  }
}

export default Dinobi;
