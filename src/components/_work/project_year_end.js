import React, { Component } from 'react';
import Modal from '../modal';

class YearEnd extends Component {
  render() {
    return (
      <Modal
        title='Year End'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
          TBD
        </Modal.Detail>
        <Modal.Detail subtitle='Design'>
          TBD
        </Modal.Detail>
      </Modal>
    )
  }
}

export default YearEnd;
