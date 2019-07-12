import React, { Component } from 'react';
import Modal from '../modal';

class BoxHackathon extends Component {
  render() {
    return (
      <Modal
        title='Box Hackathon'
        handleClose={ this.props.closeModal }>
        <Modal.Detail subtitle='Context'>
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

export default BoxHackathon;
