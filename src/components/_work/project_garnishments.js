import React, { Component } from 'react';
import Modal from '../modal';

class Garnishments extends Component {
  render() {
    return (
      <Modal
        title='Garnishments'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Problem'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Goal'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default Garnishments;
